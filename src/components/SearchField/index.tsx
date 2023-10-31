import React from 'react'

function SearchField(props:any) {
    return (
        <>
            <input {...props} className='w-full h-[40px] rounded pl-2 border  bg-gray-200' />
            <button className='absolute right-1 btn bg-blue-600 text-white px-2 py-1 rounded'>Search</button>
        </>
    )
}

export default SearchField
