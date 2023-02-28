import React, { useEffect, useState } from 'react'
import { Splide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import services from '../services/api'
import CardRandomRecipe from './cards/CardRandomRecipe'
import utils from '../utils/utils'

export default function Popular({ media }) {
    const [popular, setPopular] = useState([])

    const getPopulars = async() => {
        const check = localStorage.getItem('popular')
        
        if(check){
            setPopular(JSON.parse(check))
        } else {
            const response = await services.getRandomRecipes()

            const { recipes } = response.data
            
            localStorage.setItem('popular', JSON.stringify(recipes))
            setPopular(response.data.recipes)
        }
    }
    
    useEffect(() => {
        getPopulars()
    }, [])

    return (
        <section className='flex gap-2 flex-col'>
            <h1 className='page-title'>Popular Picks</h1>
            <Splide 
                options={{
                    perPage: utils.slidePerPage(media, 1),
                    arrows: false,
                    pagination: false,
                    width: '100%',
                    height: utils.sliderHeightPopular(media, 8),
                    padding: { top: '1rem', bottom: '1rem' },
                    drag: 'free',
                    gap: '1.25rem',
                }}
            >
                {
                    popular.map((recipe, index) => (
                        <CardRandomRecipe key={index} data={recipe} />
                    ))
                }
            </Splide>
        </section>
    )
}
