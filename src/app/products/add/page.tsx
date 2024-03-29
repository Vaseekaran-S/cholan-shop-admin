"use client"

import { useEffect, useState } from 'react'
import axios from 'axios'

import { ProductFields } from "@/data/Forms/data"
import InputField from '@/components/InputFields'
import { useRouter } from 'next/navigation'

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '@/lib/Firebase'

type FormData = {
  name: string,
  product_id: number,
  category: string,
  price: number,
  colour: string,
  brand: string,
  description: string,
  offer: string,
  discount: number,
  image: string,
}

type Category = [{
  _id: Object
}]

export default function Page() {

  const router = useRouter()

  const [category, setCategory] = useState<Category>([{
    _id: {}
  }])
  const [isExist, setIsExist] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    product_id: 0,
    category: '',
    price: 0,
    colour: '',
    brand: '',
    description: '',
    offer: '',
    discount: 0,
    image: '',
  })
  const [product_image, setProduct_image] = useState()

  async function getCategory() {
    await axios.get("/api/products/categories").then(res => setCategory(res.data)).catch((err) => console.log(err))
  }

  useEffect(() => {
    getCategory()
  }, [])

  const uploadFbImg = async (image: any)=>{
    const imageRef = ref(storage, `products/${formData?.category}/${formData?.product_id + '-' + formData?.name}/product_images/${Date.now()}.png`)
    await uploadBytes(imageRef, image)
    const firebase_img_url = await getDownloadURL(imageRef)
    return firebase_img_url
  }

  async function addProduct(event: any) {
    event.preventDefault();
    if (isExist) {
      alert("Product ID alredy exist")
      return
    }
    setIsSubmit(true)
    let data = formData
    if (product_image) {
      const firebase_img_url = await uploadFbImg(product_image)
      data = {
        ...data,
        image: firebase_img_url
      }
    }
    const productCategory = category.filter((e: any) => { return e.category_name == formData?.category })
    const response = await axios.post("/api/products", data)
    console.log(response);
    
    await axios.put(`/api/products/categories`, { category_id: formData?.category, product_id: response?.data._id })
    router.push('/products')
  }
  
  async function handleChange(event: any) {
    const value = event.target.value || 0
    if (event.target.id == "product_id") {
      await axios.get(`/api/products/product_id/${value}`).then(res=> setIsExist(res.data.exist)).catch((err) => console.log(err))
    }
    if (event.target.type == "file") {
      setProduct_image(event.target.files[0])
    } else {
      setFormData({
        ...formData,
        [event.target.id]: value
      })
    }
  }

  return (
    <div className="px-20 py-10 w-full">
      {isSubmit ? (
        <div className="fixed top-1/2 left-1/2 inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
        </div>
      ) : ""}
      <form onSubmit={addProduct}>
        <div className='grid grid-cols-4 gap-10 pt-5'>
          {ProductFields.map((e, i) => {
            return (
              <InputField {...e} key={i} isexist={isExist} onChange={handleChange} datalist={category} />
            )
          })}
        </div>
        <button type='submit' className={`btn bg-green-500 text-white mt-10 px-5 py-2 border rounded ${isSubmit ? 'bg-green-700' : ''}`} disabled={isSubmit}>Submit</button>
      </form>
    </div>
  )
}
