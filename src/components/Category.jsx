import React, { useContext } from 'react'
import { GiSushis, GiNoodles, GiFullPizza, GiHamburger, GiForkKnifeSpoon } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import { HeaderContext } from './Header'

function Category() {
    const { state, dispatch } = useContext(HeaderContext)
    
    return (
        <nav className='flex gap-4 mb-6 items-center'>
            <NavLink 
                to={'/'}
                onClick={() => dispatch({ type: 'SELECT_CUISINE_CATEGORY', payload: 'popular' })}
                className={`category hover:category-active active:category-active ${state.selected === 'popular' ? 'category-active' : 'category-inactive'}`}
            >
                <GiForkKnifeSpoon />
                <h4>Popular</h4>
            </NavLink>
            <NavLink 
                to={'/cuisine/japanese'}
                onClick={() => dispatch({ type: 'SELECT_CUISINE_CATEGORY', payload: 'japanese' })}
                className={`category hover:category-active active:category-active ${state.selected === 'japanese' ? 'category-active' : 'category-inactive'}`}
            >
                <GiSushis />
                <h4>Japanese</h4>
            </NavLink>
            <NavLink 
                to={'/cuisine/thai'}
                onClick={() => dispatch({ type: 'SELECT_CUISINE_CATEGORY', payload: 'thai' })}
                className={`category hover:category-active ${state.selected === 'thai' ? 'category-active' : 'category-inactive'}`}
            >
                <GiNoodles/>
                <h4>Thai</h4>
            </NavLink>
            <NavLink
                to={'/cuisine/italian'} 
                onClick={() => dispatch({ type: 'SELECT_CUISINE_CATEGORY', payload: 'italian' })}
                className={`category hover:category-active ${state.selected === 'italian' ? 'category-active' : 'category-inactive'}`}
            >
                <GiFullPizza/>
                <h4>Italian</h4>
            </NavLink>
            <NavLink
                to={'/cuisine/american'} 
                onClick={() => dispatch({ type: 'SELECT_CUISINE_CATEGORY', payload: 'american' })}
                className={`category hover:category-active ${state.selected === 'american' ? 'category-active' : 'category-inactive'}`}
            >
                <GiHamburger/>
                <h4>American</h4>
            </NavLink>
        </nav>
    )
}

export default Category