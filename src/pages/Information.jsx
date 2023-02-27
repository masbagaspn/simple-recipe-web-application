import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GiFruitBowl, GiSpellBook } from 'react-icons/gi'
import services from '../services/api'
import utils from '../utils/utils'

function Information() {
    const [isLoading, setIsLoading] = useState(true)
    const [information, setInformation] = useState({})
    const [selectedView, setSelectedView] = useState('ingredients')

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
    <section className='w-full flex flex-col gap-4'>
        <div className='flex flex-col items-start rounded-md overflow-hidden gap-2'>
            <img className='w-full h-96 object-cover' src={information.image} alt={information.title} />
            <span className='text-left text-sm'>
                {`Source: `}
                <a href={information.sourceUrl}>{information.sourceName}</a>
            </span>
        </div>
        <div className='w-full h-fit'>
            <h1 className='w-3/4 page-title'>{information.title}</h1>
            <p className='indent-4' dangerouslySetInnerHTML={{ __html: information.summary }}></p>
        </div>
        {/* <div className='w-full flex justify-center items-center gap-4 my-4'>
            <button 
                onClick={() => setSelectedView('ingredients')}
                className={
                    `category px-4 ${selectedView === 'ingredients' ? 'category-active' : 'category-inactive'}`
                }
            >
                <GiFruitBowl />
                Ingredients
            </button>
            <button 
                onClick={() => setSelectedView('instructions')}
                className={
                    `category px-4 ${selectedView === 'instructions' ? 'category-active' : 'category-inactive'}`
                }
            >
                <GiSpellBook />
                Instructions
            </button>
        </div> */}
        <div>
            <h2 className='page-title py-4'>Ingredients</h2>
            <ul className='w-full grid grid-cols-4 gap-2'>
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
        <div>
            <h2 className='page-title py-4'>Instructions</h2>
            <ol className='list-decimal flex flex-col gap-2 ml-6'>
                {
                    information.instructions.split('.').map((string, index) => (
                        string !== '' && <li key={index}>{string}</li>
                    ))
                }
            </ol>
        </div>
        <span className='w-full text-center text-2xl font-semibold mt-10'>Hope you like it!</span>
    </section>
  )
}

export default Information