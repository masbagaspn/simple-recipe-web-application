import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GiFruitBowl, GiSpellBook } from 'react-icons/gi'
import services from '../services/api'
import utils from '../utils/utils'

function Information() {
    const [isLoading, setIsLoading] = useState(true)
    const [information, setInformation] = useState({})

    const { id } = useParams()

    const getInformationById = async(id) => {
        setIsLoading(true)
        
        const response = await services.getRecipeInformationById(id)
        const { data } = response
        setInformation(data)
        setIsLoading(false)
    }

    useEffect(() => {
        getInformationById(id)
    }, [])
    
  return (
    !isLoading &&
    <section className='w-full flex flex-col gap-10 px-8 py-4 tablets:px-10 tablets:py-6 laptop:px-12 laptop:py-8 desktop:px-16'>
        <div className='flex flex-col items-start rounded-md overflow-hidden gap-2'>
            <img className='w-full h-48 tablets:h-52 laptop:h-60 desktop:h-80 object-cover rounded-md' src={information.image} alt={information.title} />
            <span className='text-left text-sm'>
                {`Source: `}
                <a href={information.sourceUrl}>{information.sourceName}</a>
            </span>
        </div>
        <div className='w-full h-fit flex flex-col laptop:flex-row gap-6'>
            <h1 className='w-full laptop:w-1/4 h-fit pb-4 page-title border-b-2 laptop:border-0 border-black'>{information.title}</h1>
            <p className='w-full laptop:w-3/4 text-justify indent-4' dangerouslySetInnerHTML={{ __html: information.summary }}></p>
        </div>
        <div className='w-full flex flex-col laptop:flex-row gap-6'>
            <h2 className='w-full laptop:w-1/4 h-fit pb-4 page-title border-b-2 laptop:border-0 border-black'>Ingredients</h2>
            <ul className='w-full laptop:w-3/4 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-2'>
                {
                    information.extendedIngredients.map((ingredient, index) => (
                        <li key={index}>
                            {`◆ `}
                            <span>{`${ingredient.amount} ${ingredient.unit} `}</span>
                            <b>{ingredient.name}</b>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className='w-full flex flex-col laptop:flex-row gap-6'>
            <h2 className='w-full laptop:w-1/4 h-fit pb-4 page-title border-b-2 laptop:border-0 border-black'>Instructions</h2>
            <span className='w-full laptop:w-3/4 h-fit' dangerouslySetInnerHTML={{ __html: information.instructions }} />
        </div>
    </section>
  )
}

export default Information