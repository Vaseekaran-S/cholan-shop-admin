
import React from 'react'
import { navBar } from '@/data/navBar/data'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <div className='h-[80px] w-full bg-black px-4 flex items-center justify-between'>
      <a href="/">
        <Image src="/images/logo/LogoDark.png" alt="logo" width={150} height={100}/>
      </a>
      <div>
        <ul className='sm:flex'>
        { navBar.map((e,i)=>{
            return(
                <li className='text-white p-2' key={i}>
                    <Link href={e.href}>{e.name}</Link>
                </li>
            )
        }) }
        </ul>
      </div>
    </div>
  )
}

export default Header
