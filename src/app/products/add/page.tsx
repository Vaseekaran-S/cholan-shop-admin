"use client"

import { useEffect, useState } from 'react'
import axios from 'axios'
import { AdminData } from "@/data/formData"
import InputField from '@/components/InputFields'
import Router from 'next/router'

export default function Home() {

  const [isSubmit, setIsSubmit] = useState(false)

  const [formData, setFormData] = useState<Object>({})
  const [data, setData] = useState<Array<Object>>([{}])

  async function add(event: any) {
    event.preventDefault();
    setIsSubmit(true)
    const respose = await axios.post("/api/products/add", formData)
    if(respose.status == 200){
      Router.push('/products')
    }

  }

  function handleChange(event: any) {

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
        [event.target.id]: event.target.value
      })
    }

  }

  return (
    <main className="px-20 py-10">

      <div>
        <form onSubmit={add}>
          <div className='grid grid-cols-4 gap-10 pt-5'>
            {AdminData.map((e, i) => {
              return (
                <InputField attributes={e} key={i} onChange={handleChange} />
              )
            })}
          </div>
          <button type='submit' className='btn bg-green-500 text-white mt-10 px-5 py-2 border rounded' disabled={isSubmit}>Submit</button>
        </form>
      </div>

    </main>
  )
}
