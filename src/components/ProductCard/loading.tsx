
import React from 'react'

function ProductCardSkeliton() {
  return (
    <div className='p-2 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 border rounded h-[300px] w-full animate-pulse bg-gray-300'>
      <h2 className='h-[20px] w-[200px] mt-2 mb-2 bg-slate-700'></h2>
      <div className='h-[200px] rounded w-full bg-slate-700'></div>
      <div className='w-100 flex justify-between'>
        <div className='rounded bg-slate-700 h-[30px] w-[100px] mt-2'></div>
        <div className='rounded bg-slate-700 h-[30px] w-[100px] mt-2'></div>
      </div>
    </div>
  )
}

export default ProductCardSkeliton
