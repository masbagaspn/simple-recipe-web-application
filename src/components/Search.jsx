import React, { useContext } from 'react'
import clsx from 'clsx'
import { HiOutlineSearch } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { HeaderContext } from './Header'

function Search() {
  const { state, dispatch } = useContext(HeaderContext)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(state.query !== ''){
      navigate(`/searched?query=${state.query}`)
      dispatch({ type: 'RESET_STATE' })
    }
  }

  return (
    <form 
      className={clsx(
        'h-fit flex items-center gap-2.5 pl-4 pr-5 pt-1.5 pb-2 rounded-full text-xs cursor-pointer border-[1px] border-black',
        'mobile:w-full',
        'tablets:w-fit'
      )}
      onSubmit={(e) => handleSubmit(e)}
    >
        <HiOutlineSearch />
        <input 
          className='text-sm outline-none'
          placeholder='ex: Cookies'
          name='query'
          value={state.query}
          onChange={ e => dispatch({ type: 'INPUT_SEARCH_QUERY', payload: e.target.value }) }
        /> 
    </form>
  )
}

export default Search