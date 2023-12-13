"use client"

import { Button } from "@/components/Buttons"
import InputFields from "@/components/Fields"
import PopupModal from "@/components/PopupCard"
import axios from "axios"
import { useEffect, useState } from "react"

type Category = {
    category_name: string,
    category_description: string,
}

const fields = [
    {
        field: 'input',
        type: 'text',
        value: "",
        id: 'category_name',
        name: 'category_name',
        placeholder: 'Enter Category Name*',
        label: 'Category Name',
        required: true,
        styleType: 1
    },
    {
        field: 'textarea',
        value: "",
        id: 'category_description',
        name: 'category_description',
        placeholder: 'Enter Category Description*',
        label: 'Category Description',
        required: true,
        rows: 5,
        tailwind: 'col-span-4',
        styleType: 2
    }
]

export default function Page() {

    const [isSubmit, setIsSubmit] = useState(false)
    const [categories, setCategories] = useState<Array<Category>>([])
    const [category, setCategory] = useState<Category>({
        category_name: "",
        category_description: ""
    })
    
    // Set states for Dynamic fields
    const [subCategories,setSubCategories] = useState<Array<String>>([])

    async function addCategory(event: any) {
        event.preventDefault()
        if (category?.category_name == "" || category?.category_description == "") {
            alert("Enter all Details!")
            return
        }
        setIsSubmit(true)
        const data = { ...category, sub_categories: subCategories }
        await axios.post("/api/products/categories", data).then(e => { setIsSubmit(false) })
        setCategory({ category_name: "", category_description: "" })
        setSubCategories([])
    }

    async function getCategory() {
        const response = await axios.get("/api/products/categories")
        setCategories(response.data)
    }

    useEffect(() => {
        getCategory()
    }, [isSubmit])

    const handleChange = (event: any) => {
        setCategory({ ...category, [event.target.name]: event.target.value })
    }

    //Methods of Sub Categories

    function addSubCategories(){
        setSubCategories([...subCategories,""])
    }

    const deleteSubCategories = (index:number)=>{
        const currentData = [...subCategories]
        currentData.splice(index,1)
        setSubCategories(currentData)        
    }

    const subCategoriesEvent = (event: any, index: number) => {
        const currentData = [...subCategories]
        currentData[index] = event.target.value
        setSubCategories(currentData)        
    }

    return (
        <div className="container mx-auto p-5">
            {isSubmit ? (
                <div className="z-10 fixed top-1/2 left-1/2 inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                </div>
            ) : ""}
            <h2 className="text-2xl font-bold mb-2 mx-10">Categories</h2>
            <div className="p-5 rounded box bg-gray-400 mx-10">
                <div className="grid grid-cols-4 gap-3 mb-4">
                    <InputFields {...fields[0]} value={category.category_name}  onChange={(e:any)=>handleChange(e)}/>
                    <InputFields {...fields[1]} value={category.category_description}  onChange={(e:any)=>handleChange(e)}/>
                </div>
                <div className="mb-5">
                    <h3 className="font-bold mb-3">Sub Categories : <Button placeholder="Add +" styles={1} onClick={()=>{addSubCategories()}}/></h3>
                    <div className="grid grid-cols-6 gap-3">
                    { subCategories.map((e,i)=>{
                        return(
                            <div key={i} className="md:col-span-2 sm:col-span-3 col-span-6 flex items-center mx-2 relative">
                                <h1 className="absolute left-2">{i+1}</h1>
                                <InputFields key={i} value={e} field="input" placeholder="Enter Sub Category*" onChange={(e:any)=>subCategoriesEvent(e,i)} tailwind="w-full mb-0 mx-1" field_style="px-6"/>
                                <span onClick={()=>deleteSubCategories(i)} className="absolute right-2 font-bold cursor-pointer text-red-500 rounded-full">x</span>
                            </div>
                        )
                    }) }
                    </div>
                </div>
                <Button type="submit" placeholder="Add Category" onClick={(e:any)=>addCategory(e)} styles={2} disabled={isSubmit ? true : false}/>
            </div>
            
            <div className="mt-5 pt-5 grid grid-cols-12 mx-10">
                {categories.map((e,i) => {
                    return (
                        <div key={i} className="col-span-2">
                            <PopupModal buttonLabel={e.category_name} modalContent={e.category_description}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}