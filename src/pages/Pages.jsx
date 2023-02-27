import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cuisine from './Cuisine'
import Home from './Home'
import Information from './Information'
import Searched from './Searched'

export default function Pages() {
  return (
    <section>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:cuisine' element={<Cuisine />} />
        <Route path='/searched' element={<Searched />} />
        <Route path='/recipes/:id/information' element={<Information />} />
      </Routes>
    </section>
  )
}
