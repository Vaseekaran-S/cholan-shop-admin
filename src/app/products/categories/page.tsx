"use client"

import InputField from "@/components/InputFields"
import axios from "axios"
import { useEffect, useState } from "react"

type Category = {
    category_name: string,
    category_description: string,
}

export default function Page() {

    const [isSubmit, setIsSubmit] = useState(false)
    const [categories, setCategories] = useState<Array<Category>>([])
    const [category, setCategory] = useState<Category>({
        category_name: "",
        category_description: ""
    })

    async function addCategory(event: any) {
        event.preventDefault()
        if (category?.category_name == "" || category?.category_description == "") {
            alert("Enter all Details!")
            return
        }
        setIsSubmit(true)
        await axios.post("/api/products/categories", category).then(e => {
            setIsSubmit(false)
        })
        setCategory({ category_name: "", category_description: "" })
    }

    async function getCategory() {
        const response = await axios.get("/api/products/categories")
        setCategories(response.data)
    }

    useEffect(() => {
        getCategory()
    }, [isSubmit])

    const handleChange = (event: any) => {
        setCategory({
            ...category,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="container mx-auto p-5">
            {isSubmit ? (
                <div className="fixed top-1/2 left-1/2 inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                </div>
            ) : ""}
            <h2 className="text-2xl font-bold">Categories</h2>
            <form onSubmit={addCategory}>
                <div className="grid grid-cols-4 max-w-md gap-5 mt-5 rounded box bg-gray-500 p-4">
                    <InputField type="text" name="category_name" lable="Category Name" value={category?.category_name} onChange={(e: any) => handleChange(e)} placeholder='Enter Category Name' required />
                    <textarea name="category_description" placeholder="Enter Category Description" value={category?.category_description} onChange={(e: any) => handleChange(e)} className="col-span-4 rounded" rows={5} required></textarea>
                    <button type="submit" className='btn bg-black text-white py-1 px-3 rounded' disabled={isSubmit ? true : false}>Add</button>
                </div>
            </form>
            <div className="mt-5 pt-5 grid grid-cols-12">
                {categories.map((e,i) => {
                    return (
                        <div key={i} className="col-span-6 sm:col-span-4 md:col-span-3 bg-black text-white ml-5 mb-3 p-2 rounded">{e?.category_name}</div>
                    )
                })}
            </div>
        </div>
    )
}