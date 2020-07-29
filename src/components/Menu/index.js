import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
// import ButtonLink from './ButtonLink'
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFlix" />
            </a>

            {/* <ButtonLink className="ButtonLink" href="/home">Novo video</ButtonLink> */}

            <Button as="a" className="ButtonLink" href="/home">Novo Video</Button>
        </nav>
    )
};

export default Menu;