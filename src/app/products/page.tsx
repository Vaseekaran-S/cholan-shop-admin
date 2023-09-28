"use client"

import DropDown from '@/components/DropDown'
import ProductCard from '@/components/ProductCard'
import ProductCardSkeliton from '@/components/ProductCard/loading'
import SearchField from '@/components/SearchField'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { filter } from "@/data/filterDropDown/data"

function page() {

    const [products, setProducts] = useState<Array<Object>>([{}])

    const [isLoading, setIsLoading] = useState(true)

    async function getProducts() {
        const response = await axios.get("/api/products/get")
        setProducts(response.data.data)
        setIsLoading(false)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className='bg-gray-200 h-full w-full px-7'>
            <div className='p-3'>
                <div className='flex justify-between'>
                    <h1 className='text-2xl font-bold'>Products List</h1>
                    <div className='relative w-[350px] flex items-center'>
                        <SearchField id="search_product" type="text" placeholder="Search..."/>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-5">
                    <div>
                        { filter.map((e,i)=>{
                            return (
                                <DropDown id={e.id} options={e.options} key={i}/>
                            )
                        }) }
                    </div>
                    <div className='flex items-center'>
                        <p className='text-sm font-bold mr-2'>Categories</p>
                        <a href="/products/add" className='py-1 px-3 bg-blue-600 rounded text-white'>+</a>
                    </div>
                </div>
            </div>
            <div>
                <div>

                </div>
                {isLoading ? (
                    <div className='p-5 grid grid-cols-12 gap-4'>
                        <ProductCardSkeliton />
                    </div>
                ) : (
                    <div className='p-5 grid grid-cols-12 gap-4'>
                        {products.map((e, i) => {
                            return (
                                <ProductCard data={e} key={i} />
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default page
