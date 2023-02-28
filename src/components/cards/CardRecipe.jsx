import clsx from 'clsx'
import React from 'react'
import { NavLink } from 'react-router-dom'

function CardRecipe({ food }) {
  return (
    <NavLink to={`/recipes/${food.id}/information`}>
      <article className={clsx(
        'relative w-full h-full rounded-md bg-white overflow-hidden'
        )}
      >
          <div className={`w-full h-full flex items-center rounded-md overflow-hidden`}>
              <img className='w-[120%] h-[120%] object-cover object-bottom' src={food.image} alt={food.title}/>
          </div>
          <h2 className='absolute w-full bottom-0 left-0 py-4 pl-4 pr-8 text-md tablets:text-sm laptop:text-md desktop:text-lg font-bold text-white z-20'>{food.title}</h2>
          <div className='absolute top-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-50 z-10'/>
      </article>
    </NavLink>
  )
}

export default CardRecipe