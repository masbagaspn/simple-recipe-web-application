import React from 'react'
import Beverages from '../components/Beverages'
import Popular from '../components/Popular'
import useBreakpoints from '../hooks/useBreakpoints'

export default function Home() {
  const media = useBreakpoints()

  return (
    <section className='w-full h-fit flex flex-col gap-4 px-6 tablets:px-8 laptop:px-12'>
        <Popular media={media} />
        <Beverages media={media} />
    </section>
  )
}
