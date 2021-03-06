import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
// import ButtonLink from './ButtonLink'
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="AluraFlix" />
            </Link>

            {/* <ButtonLink className="ButtonLink" to="/home">Novo video</ButtonLink> */}

            <Button as={Link} className="ButtonLink" to="/cadastro/video">Novo Video</Button>
        </nav>
    )
};

export default Menu;