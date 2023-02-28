import clsx from 'clsx'
import React, { useEffect, useReducer, useState } from 'react'
import { recipeState, recipeReducer } from '../reducer/recipe-reducer'
import { useParams } from 'react-router-dom'
import CardRecipe from '../components/cards/CardRecipe'
import services from '../services/api'
import utils from '../utils/utils'

function Cuisine() {
    const [foods, setFoods] = useState([])
    const [state, dispatch] = useReducer(recipeReducer, recipeState)
    
    const { cuisine } = useParams()

    const getSelectedCuisineRecipe = async() => {
        const check = localStorage.getItem(cuisine)

        if(check){
            setFoods(JSON.parse(check))
        } else {
            const query = `cuisine=${cuisine}`
            const response = await services.getRecipesByQuery(query)

            const { results } = response.data
            
            localStorage.setItem(`${cuisine}`, JSON.stringify(results))
            setFoods(results)
        }
    }
    
    useEffect(() => {
        getSelectedCuisineRecipe()
    }, [cuisine])
    
    return (
        <section className={clsx(
                'w-full h-full flex flex-col gap-2 pb-8',
                'section-padding'
            )}
        >
            <h1 className='page-title'>{`${utils.capitalize(cuisine)} Cuisine`}</h1>
            <div className={clsx(
                'w-full h-full grid',
                'responsive-grid',
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