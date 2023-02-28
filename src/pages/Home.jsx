import React from 'react'
import Beverages from '../components/Beverages'
import Popular from '../components/Popular'

export default function Home() {
  return (
    <section className='w-full h-fit flex flex-col gap-4 px-6 tablets:px-8 laptop:px-12'>
        <Popular />
        <Beverages />
    </section>
  )
}
