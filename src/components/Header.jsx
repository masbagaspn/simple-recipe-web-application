import React, { createContext, useReducer } from 'react'
import { recipeState, recipeReducer } from '../reducer/recipe-reducer'
import clsx from 'clsx'
import Category from './Category'
import Search from './Search'

export const HeaderContext = createContext(null)

export default function Header() {
  const [state, dispatch] = useReducer(recipeReducer, recipeState)
  console.log(state)
  return (
    <HeaderContext.Provider value={{ state, dispatch }}>
        <header className={clsx(
            'w-full items-start',
            'flex flex-wrap flex-col-reverse header-padding gap-6',
            'desktop:flex-nowrap desktop:flex-row desktop:justify-between '
          )}
        >
            <Category />
            <Search />
        </header>
    </HeaderContext.Provider>
  )
}
