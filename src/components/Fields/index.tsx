"use client"


const fieldStyles = [
    'border-b border-black rounded p-1 mt-1 hover:border hover:rounded font-medium',
    'border border-black rounded p-1 mt-1 font-medium',
]

const Textarea = ({ styleType, field_style, ...attributes }: any) => {
    const style = fieldStyles[styleType-1||0]
    return (
        <textarea {...attributes} className={`${style} ${field_style}`}></textarea>
    )

}

const Select = ({ styleType, field_style, ...attributes }: any) => {
    const style = fieldStyles[styleType-1||0]    
    return (
        <select {...attributes} className={`${style} ${field_style}`}>
            <option selected disabled value="">Select</option>
            { attributes.options.map((e:any,i:number)=>{
                return <option value={e} key={i}>{e}</option>
            }) }
        </select>
    )

}

const Input = ({ styleType, field_style, ...attributes }: any) => {
    const style = fieldStyles[styleType-1||0]
    return (
        <input {...attributes} className={`${style} ${field_style}`}/>
    )
}

export default function InputFields(props: any) {
    const { label, field, id, required, tailwind } = props

    return (
        <div className={`mb-2 flex flex-col col-span-2 ${tailwind}`}>
            <label htmlFor={id} className="font-bold" >
                { label }
                <span className="text-red-500">{ required ? '*' : ''}</span>
            </label>
            {(() => {
                switch (field) {
                    case 'input':
                        return <Input {...props} />
                    case 'select':
                        return <Select {...props} options={props?.options}/>
                    case 'textarea':
                        return <Textarea {...props} />
                    default:
                        return <Input {...props} />
                }
            })()}
        </div>
    )
}