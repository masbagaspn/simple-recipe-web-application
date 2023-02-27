import React, { useEffect, useState } from 'react'
import { Splide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import services from '../services/api'
import CardRandomRecipe from './cards/CardRandomRecipe'
import utils from '../utils/utils'

export default function Beverages() {
    const [beverage, setBeverage] = useState([])

    const getBeveragess = async() => {
        const check = localStorage.getItem('beverage')
        
        if(check){
            setBeverage(JSON.parse(check))
        } else {
            const query = `type=beverage`
            const response = await services.getRandomRecipes(query)
            
            const { results } = response.data
            localStorage.setItem('beverage', JSON.stringify(utils.changeImageArray(results)))
            setBeverage(response.data.recipes)
        }
    }

    useEffect(() => {
        getBeveragess()
    }, [])

    return (
        <section className='flex flex-col gap-2'>
            <h1 className='page-title'>Top Beverages</h1>
            <Splide 
                options={{
                    perPage: 5,
                    arrows: false,
                    pagination: false,
                    width: '100%',
                    height: '10rem',
                    padding: { top: '1rem', bottom: '1rem' },
                    drag: 'free',
                    gap: '1.25rem',
                }}
            >
                {
                    beverage.map((recipe, index) => (
                        <CardRandomRecipe key={index} data={recipe} />
                    ))
                }
            </Splide>
        </section>
    )
}
