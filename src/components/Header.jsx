import React, { createContext, useReducer } from 'react'
import { recipeState, recipeReducer } from '../reducer/recipe-reducer'
import Category from './Category'
import Search from './Search'

export const HeaderContext = createContext(null)

export default function Header() {
    const [state, dispatch] = useReducer(recipeReducer, recipeState)

  return (
    <HeaderContext.Provider value={{ state, dispatch }}>
        <header className='w-full flex justify-between items-start'>
            <Category />
            <Search />
        </header>
    </HeaderContext.Provider>
  )
}
