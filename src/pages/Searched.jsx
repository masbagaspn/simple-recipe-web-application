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
        setFoods(utils.changeImageArray(results))
    }

    useEffect(() => {
        let query = ''
        for(let [key, value] of searchParams){
            query = `${key}=${value}`
        }
        getRecipesBySeachQuery(query)
    }, [searchParams])


  return (
    <section className='w-full h-full flex flex-col gap-2 pb-4'>
        <h1 className='page-title'>{`Search Title: ${title}`}</h1>
        <div className='w-full h-full grid grid-cols-4 grid-rows-3 gap-[1.5rem]'>
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