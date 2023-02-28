import React from 'react'
import { motion } from 'framer-motion'
import { SplideSlide } from '@splidejs/react-splide'
import { NavLink } from 'react-router-dom'

export default function CardRandomRecipe({data}) {
  return (
    <SplideSlide>
        <NavLink to={`/recipes/${data.id}/information`}>
            <article 
                className='relative w-full h-full rounded-lg shadow-md overflow-hidden cursor-pointer'
            >
                <img className='w-full h-full object-cover' src={data.image} alt={`${data.title}`}/>
                <motion.div
                    className='absolute top-0 w-full h-full bg-black/40 mobile:opacity-1 laptop:opacity-0 z-10'
                    whileHover={{ opacity: 100 }}
                >
                    <h3 className='font-semibold w-2/3 absolute bottom-4 left-4 text-white text-xs tablets:text-md laptop:text-base'>{data.title}</h3>
                </motion.div>
            </article>
        </NavLink>
    </SplideSlide>
  )
}
