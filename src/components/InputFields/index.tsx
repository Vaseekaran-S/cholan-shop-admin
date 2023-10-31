"use client"

export default function InputField(props: any) {
    const { datalist, onChange } = props
    const isExist = props.isexist && props.id == "product_id"
    return (
        <div className="flex flex-col col-span-4 md:col-span-2 relative">
            <label htmlFor={props?.id} className="font-bold" >
                {props?.lable}
                <span className="text-red-500">{props?.required ? '*' : ''}</span>
            </label>
            <input {...props} onChange={onChange} className={`border-b border-black p-1 mt-1 hover:border hover:rounded font-medium ${isExist?'text-red-500':''}`}/>
            {isExist?<p className="absolute bottom-[-25px] text-red-600">Product Id already exist</p>:""}
            {(props?.list) ? (
                <datalist id={props?.list}>
                    {datalist?.map((e:any,i:any)=>{
                        return(
                            <option value={e._id} key={i}>{e.category_name}</option>
                        )
                    })}
                </datalist>
            ) : ""}
        </div >
    )
}