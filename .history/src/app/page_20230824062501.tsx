"use client"
import Image from 'next/image'
import { connectToDB } from '@/libs/db'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>hello app</div>
      <button onClick={() => {
        connectToDB()
      }}></button>
    </main>
  )
}
