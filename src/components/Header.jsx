import React, { createContext, useReducer } from 'react'
import { recipeState, recipeReducer } from '../reducer/recipe-reducer'
import clsx from 'clsx'
import Category from './Category'
import Search from './Search'

export const HeaderContext = createContext(null)

export default function Header() {
    const [state, dispatch] = useReducer(recipeReducer, recipeState)

  return (
    <HeaderContext.Provider value={{ state, dispatch }}>
        <header className={clsx(
            'w-full items-start',
            'flex flex-wrap flex-col-reverse px-6 pt-8 gap-6',
            'tablets:px-8 laptop:px-10',
            'desktop:flex-nowrap desktop:flex-row desktop:justify-between desktop:px-12 desktop:pt-10'
          )}
        >
            <Category />
            <Search />
        </header>
    </HeaderContext.Provider>
  )
}
