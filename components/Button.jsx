'use client'
import React from 'react'

export default function Button({text, style}) {
  return (
    <button className={` bg-primary w-[200px] text-white font-medium text-lg py-3 tracking-widest rounded-full ${style}`}>{text}</button>
  )
}
