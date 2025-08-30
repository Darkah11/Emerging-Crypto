'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/ec-logo.png'
import menu from '@/public/menu.png'

export default function Header() {
  return (
    <nav className=' px-5 py-4 shadow-lg'>
      <div className=' flex justify-between items-center'>
        <Link href={'/'}>
      <Image src={logo} width={100} height={100}/>
      </Link>
      <button>
        <Image src={menu} width={30} height={30}/>
      </button>
      </div>
      <div></div>
    </nav>
  )
}
