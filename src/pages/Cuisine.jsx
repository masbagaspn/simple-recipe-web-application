import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardRecipe from '../components/cards/CardRecipe'
import services from '../services/api'
import utils from '../utils/utils'

function Cuisine() {
    const [foods, setFoods] = useState([])

    const { cuisine } = useParams()

    const getSelectedCuisineRecipe = async() => {
        const check = localStorage.getItem(cuisine)

        if(check){
            setFoods(JSON.parse(check))
        } else {
            const query = `cuisine=${cuisine}`
            const response = await services.getRecipesByQuery(query)

            const { results } = response.data
            
            localStorage.setItem(`${cuisine}`, JSON.stringify(utils.changeImageArray(results)))
            setFoods(results)
        }
    }
    
    useEffect(() => {
        getSelectedCuisineRecipe()
    }, [cuisine])
    
    return (
        <section className={clsx(
                'w-full h-full flex flex-col gap-2 pb-8',
                'px-4 tablets:px-8 laptop:px-10 desktop:px-12'
            )}
        >
            <h1 className='page-title'>{`${utils.capitalize(cuisine)} Cuisine`}</h1>
            <div className={clsx(
                'w-full h-full grid',
                'grid-cols-1 gap-4',
                'tablets:grid-cols-2',
                'laptop:grid-cols-3',
                'desktop:grid-cols-4'
            )}>
                {
                    foods.map((food, index) => (
                        <CardRecipe food={food} key={index} />
                    ))
                }
            </div>
        </section>
    )
}

export default Cuisine