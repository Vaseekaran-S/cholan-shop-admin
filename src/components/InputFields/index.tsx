"use client"

export default function InputField(props:any){
    const { attributes } = props
    return(
        <div className="flex flex-col col-span-4 md:col-span-2">
            <label htmlFor={attributes.id} className="font-bold">{attributes.lable}<span className="text-red-500">{attributes.required?'*':''}</span></label>
            <input {...attributes} {...props} className="border-b border-black p-1 mt-1 hover:border hover:rounded"/>
        </div>
    )
}