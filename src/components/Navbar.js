import React from 'react';
import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import { GiSushis } from 'react-icons/gi';

const Navbar = () => {
    return (
        <NavHeader>
            <NavLink to='/'>SUSHI</NavLink>
            <NavIcon>
                <p>MENU</p>
                <Icon />
            </NavIcon>
        </NavHeader>
    )
}

export default Navbar

const NavHeader = styled.div`
    position: absolute;
    z-index: 1;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: center;

    background: rgba(0,0,0,0.5);
    color: white;
    font-weight: 700;
`

const NavLink = styled(Link)`
    display: flex;
    align-items: center;

    color: #fff;
    font-size: 2rem;
    text-decoration: none;
    
    cursor: pointer;

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`

const NavIcon = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    
    display: block;

    color: #fff;

    cursor: pointer;

    p {
        font-weight: bold;

        transform: translate(-175%, 100%)
    }
`

const Icon = styled(GiSushis)`
    font-size: 2rem;
    
    transform: translate(-50%, -15%);
`