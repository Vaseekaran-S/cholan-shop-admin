import React from 'react'

function DropDown(props:any) {
    return (
        <>
            <select {...props} className='rounded py-1 px-2 bg-gray-500 text-white mr-2'>
                { props.options.map((e:any,i:any)=>{
                    return (
                        <option value={e} className='capitalize' key={i}>{e}</option>
                    )
                }) }
            </select>
        </>
    )
}

export default DropDown
