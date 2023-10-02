
"use client"

import InputField from '@/components/InputFields'
import axios from 'axios'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

function Page() {
    const router = useRouter()
    const [category, setCategory] = useState('')

    async function addCategory(){
        await axios.post("/api/category",{
            category_name : category,
            total_products : 0
        })
        router.push("/products")
    }

  return (
    <div className='px-20 py-10'>
        <div className="p-3 w-[300px]">
            <InputField type="text" name="category" lable="Category Name" onChange={(e:any)=>setCategory(e.target.value)} placeholder='Enter Category Name' />
            <button onClick={addCategory} className='btn bg-black text-white py-1 px-3 rounded mt-5'>Add</button>
        </div>
    </div>
  )
}

export default Page
