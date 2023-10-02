"use client"

import { useEffect, useState } from 'react'
import axios from 'axios'

import { ProductFields } from "@/data/Forms/data"
import InputField from '@/components/InputFields'
import { useRouter } from 'next/navigation'

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
  _id: Object,
  category_name: string,
  total_products: number
}]

export default function Page() {

  const router = useRouter()

  const [category, setCategory] = useState<Category>([{
    _id: {},
    category_name: "",
    total_products: 0
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

  async function getCategory() {
    const response = await axios.get("/api/category")
    setCategory(response.data.data)
  }

  useEffect(() => {
    getCategory()
  }, [])

  async function add(event: any) {
    event.preventDefault();

    if(isExist){
      alert("Product ID alredy exist")
      return
    }

    setIsSubmit(true)
    const productCategory = category.filter((e: any) => {
      return e.category_name == formData?.category
    })

    await axios.put("/api/category", { category_id: productCategory[0]._id, product_id: formData?.product_id })
    await axios.post("/api/products/add", formData)
    router.push('/products')
  }

  async function handleChange(event: any) {

    const value = event.target.value || 0

    if (event.target.id == "product_id") {
      const product = await axios.get(`/api/products/product_id/${value}`)
      setIsExist(product.data.exist)
    }

    const render = new FileReader()
    if (event.target.type == "file") {
      render.onload = function (upload) {
        const url = upload.target?.result
        setFormData({
          ...formData,
          [event.target.id]: url
        })
      }
      render.readAsDataURL(event.target.files[0])
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
      <form onSubmit={add}>
        <div className='grid grid-cols-4 gap-10 pt-5'>
          {ProductFields.map((e, i) => {
            return (
              <InputField {...e} key={i} isExist={isExist} onChange={handleChange} datalist={category} />
            )
          })}
        </div>
        <button type='submit' className={`btn bg-green-500 text-white mt-10 px-5 py-2 border rounded ${isSubmit?'bg-green-700':''}`} disabled={isSubmit}>Submit</button>
      </form>
    </div>
  )
}
