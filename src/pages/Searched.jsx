import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import CardRecipe from '../components/cards/CardRecipe'
import services from '../services/api'
import utils from '../utils/utils'

function Searched() {
    const [foods, setFoods] = useState([])

    const [searchParams] = useSearchParams()
    const title = searchParams.get('query')

    const getRecipesBySeachQuery = async(query) => {
        const response = await services.getRecipesByQuery(query)
        const { results } = response.data
        setFoods(results)
    }

    useEffect(() => {
        let query = ''
        for(let [key, value] of searchParams){
            query = `${key}=${value}`
        }
        getRecipesBySeachQuery(query)
    }, [searchParams])


  return (
    <section className={clsx(
            'w-full h-full flex flex-col gap-2 pb-8',
            'section-padding'
        )}
    >
        <h1 className='page-title'>{`Search: ${title}`}</h1>
        <div className='w-full h-full grid responsive-grid gap-[1.5rem]'>
            {
                foods.map((food, index) => (
                    <CardRecipe food={food} key={index} />
                ))
            }
        </div>
    </section>
  )
}

export default Searched