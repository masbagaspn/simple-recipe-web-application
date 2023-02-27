import React, { useContext } from 'react'
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
      className={
        `w-fit h-fit flex items-center gap-2.5 pl-4 pr-5 pt-2 pb-2.5 
        rounded-full text-xs cursor-pointer border-[1px] border-black`
      }
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