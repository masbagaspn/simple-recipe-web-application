import React, { useContext, useLayoutEffect } from 'react'
import { GiSushis, GiNoodles, GiFullPizza, GiHamburger, GiForkKnifeSpoon } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import { HeaderContext } from './Header'

function Category() {
    const { state, dispatch } = useContext(HeaderContext)
    
    useLayoutEffect(() => {
        dispatch({ type: 'SELECT_CUISINE_CATEGORY', payload: window.location.href.split('/').at(-1) })
    }, [])

    return (
        <nav className='flex flex-wrap gap-4 mb-6 items-center'>
            <NavLink 
                to={'/'}
                onClick={() => dispatch({ type: 'SELECT_CUISINE_CATEGORY', payload: 'popular' })}
                className={`button hover:button-active ${state.selected === 'popular' ? 'button-active' : 'button-inactive'}`}
            >
                <GiForkKnifeSpoon />
                <h4>Popular</h4>
            </NavLink>
            <NavLink 
                to={'/cuisine/japanese'}
                onClick={() => dispatch({ type: 'SELECT_CUISINE_CATEGORY', payload: 'japanese' })}
                className={`button hover:button-active ${state.selected === 'japanese' ? 'button-active' : 'button-inactive'}`}
            >
                <GiSushis />
                <h4>Japanese</h4>
            </NavLink>
            <NavLink 
                to={'/cuisine/thai'}
                onClick={() => dispatch({ type: 'SELECT_CUISINE_CATEGORY', payload: 'thai' })}
                className={`button hover:button-active ${state.selected === 'thai' ? 'button-active' : 'button-inactive'}`}
            >
                <GiNoodles/>
                <h4>Thai</h4>
            </NavLink>
            <NavLink
                to={'/cuisine/italian'} 
                onClick={() => dispatch({ type: 'SELECT_CUISINE_CATEGORY', payload: 'italian' })}
                className={`button hover:button-active ${state.selected === 'italian' ? 'button-active' : 'button-inactive'}`}
            >
                <GiFullPizza/>
                <h4>Italian</h4>
            </NavLink>
            <NavLink
                to={'/cuisine/american'} 
                onClick={() => dispatch({ type: 'SELECT_CUISINE_CATEGORY', payload: 'american' })}
                className={`button hover:button-active ${state.selected === 'american' ? 'button-active' : 'button-inactive'}`}
            >
                <GiHamburger/>
                <h4>American</h4>
            </NavLink>
        </nav>
    )
}

export default Category