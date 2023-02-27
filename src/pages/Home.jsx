import React from 'react'
import Beverages from '../components/Beverages'
import Popular from '../components/Popular'

export default function Home() {
  return (
    <section className='w-full h-fit flex flex-col gap-4'>
        <Popular />
        <Beverages />
    </section>
  )
}
