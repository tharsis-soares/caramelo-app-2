import React, { useState } from 'react'
// import Button from './Button'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import '../styles/components/Navbar.scss'
import BrandName from './BrandName'
import Button from './Button'

function Navbar() {
    const [toggleNavbar, setToggleNavbar] = useState(false)
    
    const navbarToggler = () => {
        setToggleNavbar(!toggleNavbar)
    }

    return (
        <div className={`navbar ${toggleNavbar === true ? 'active' : ''}`}>
            <div className="col">
                <BrandName />
                <div className="collapseble-button">
                    {!toggleNavbar ? (<GiHamburgerMenu onClick={navbarToggler} />) : (<MdClose onClick={navbarToggler} />)}
                </div>
            </div>
            <nav>
            <div className="links">
                <ul>
                    <li>
                        <a href="/">Sobre</a> 
                    </li>
                    <li>
                        <a href="/">Projetos</a> 
                    </li>
                    <li>
                        <a href="/">Serviços</a> 
                    </li>
                    <li>
                        <Button content='Contact' />
                    </li>
                    
                </ul>
                </div>
            </nav>
        </div>
    )
}


export default Navbar
