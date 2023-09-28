import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {links} from '../data'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

import logo from '../images/logo.png'
import './navbar.css'



const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);


  return (
    <nav>
        <div className="container nav__container">
            <Link to ="/" className='logo' onClick={() => setIsNavShowing(false)}>
            <img src={logo} alt="nav logo" className='logo' />
            </Link>

            <ul className={'nav__link ${isNavShowing ? `show__nav` : `hide__nav`'}
>
                {
                    links.map(({name, path}, index ) =>{
                        return(
                            <li key={index}>
                                <NavLink to ={path} className={({isActive}) => isActive ? `active-nav` : ``} onClick={() => setIsNavShowing (prev => !prev)}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav__toggle-btn" onClick={() => setIsNavShowing (prev => !prev)}>
                {
                    isNavShowing ? <AiOutlineClose/> :<FaBars/>
                }    
            </button>
        </div>
    </nav>
  )
}

export default Navbar