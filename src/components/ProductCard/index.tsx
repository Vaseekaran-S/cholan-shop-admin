import Link from 'next/link'
import React from 'react'

function ProductCard({ data }: any) {
  return (
    <div className='p-2 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 border h-[300px] rounded bg-gray-300'>
      <h2 className='font-bold text-xl capitalize h-[30px] mb-2'>{data.name}</h2>
      <div>
        <img src={data.image} alt="image" className='h-[200px] bg-black rounded' />
      </div>
      <div className='flex justify-between mt-2'>
        <a href={`/products/edit`} className='btn bg-blue-600 py-1 px-2 text-white rounded'>View</a>
        <a href={`/products/edit`} className='btn bg-blue-600 py-1 px-2 text-white rounded'>Edit</a>
      </div>
    </div>
  )
}

export default ProductCard
