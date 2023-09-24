"use client"

import { useState } from 'react'
import axios from 'axios'

type Data = {
  name : string
}

export default function Home() {

  const [name, setName] = useState('initial')
  const [data, setData] = useState<Data>({name: ""})

  async function add(){

    const response = await axios.post("/api/products/add",{
      name : name
    })

    const res = response.data
    setData(res) 
    
  }

  return (
    <main className="flex p-24">
      <input type="text" onChange={(e)=>setName(e.target.value)} className='border-[1px] border-black'/>
      <button onClick={add}>Send</button>
      { data?.name }
    </main>
  )
}
