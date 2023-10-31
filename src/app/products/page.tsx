"use client"

import DropDown from '@/components/DropDown'
import ProductCard from '@/components/ProductCard'
import ProductCardSkeliton from '@/components/ProductCard/loading'
import SearchField from '@/components/SearchField'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { filter } from "@/data/DropDown/data"

function Page() {

    const [products, setProducts] = useState<Array<Object>>([{}])
    const [filterProducts, setFilterProducts] = useState<Array<Object>>([{}])
    const [isLoading, setIsLoading] = useState(true)

    async function getProducts() {
        const response = await axios.get("/api/products")
        setProducts(response.data.data)
        setFilterProducts(response.data.data)
        setIsLoading(false)
    }

    useEffect(() => {
        getProducts()
    }, [])

    function handleChange(event: any) {
        const id = event.target.id
        const value = event.target.value

        let filterData;
        if (id == 'category') {
            filterData = products.filter((product: any) => {
                return product[id as keyof typeof product] == value;
            })
        } else {
            filterData = filterProducts.filter((product: any) => {
                return product[id as keyof typeof product] <= value;
            })
        }
        setFilterProducts(filterData)
    }

    const dummy = Array.apply(null, Array(8))

    return (
        <div className='w-full min-h-screen px-7'>
            <div className='p-3'>
                <div className='flex justify-between'>
                    <h1 className='text-2xl font-bold'>Products List</h1>
                    <div className='relative w-[350px] flex items-center'>
                        <SearchField id="search_product" type="text" placeholder="Search..." />
                    </div>
                </div>
                <div className="flex justify-between items-center mt-5">
                    <div>
                        {filter.map((e, i) => {
                            return (
                                <DropDown id={e.id} options={e.options} key={i} onChange={handleChange} />
                            )
                        })}
                    </div>
                    <div className='flex items-center'>
                        <a href="/products/categories">
                            <p className='text-sm font-bold mr-2'>Categories</p>
                        </a>
                        <a href="/products/add" className='py-1 px-3 bg-blue-600 rounded text-white'>Product +</a>
                    </div>
                </div>
            </div>
            <div>
                <div className='p-5 grid grid-cols-12 gap-4'>
                    {isLoading ? (
                        <>
                            {dummy.map((e, i) => {
                                return (
                                    <ProductCardSkeliton key={i}/>
                                )
                            })}
                        </>
                    ) : (
                        <>
                            {filterProducts.map((e, i) => {
                                return (
                                    <ProductCard data={e} key={i} />
                                )
                            })}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Page
