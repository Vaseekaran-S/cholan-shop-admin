import React from 'react'

function DropDown(props: any) {
    return (
        <select {...props} className='rounded py-1 px-2 bg-gray-500 text-white mr-2 text-sm'>
            {props.options.map((e: any, i: any) => {
                return (
                    <option value={e} className='capitalize text-sm' key={i}>{e}</option>
                )
            })}
        </select>
    )
}

export default DropDown
