"use client"

import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

  const [formData, setFormData] = useState<Object>({})
  const [data, setData] = useState<Array<Object>>([{}])

  async function getData() {
    const response = await axios.get("/api/products/get")
    setData(response.data.data)
  }

  async function add(event: any) {
    event.preventDefault();
    await axios.post("/api/products/add", formData)
  }

  function handleChange(event: any) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value
    })
  }

  return (
    <main>
      <div></div>
    </main>
  )
}
