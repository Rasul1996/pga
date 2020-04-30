import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {HeaderSection,HeaderBody, HeaderBurger, Menu, Language} from './atoms/block';

import Logo from '../../media/images/logo.png';
import {BodyContainer} from '../../ui/atoms';


export const Header = () => {
    const [ active, setActive ] = useState(false);


    return (
        <HeaderSection>
            <BodyContainer>
                <HeaderBody>
                    <Link className="HeaderLogo" to='/'>
                    <img src={Logo} alt='images'/>
                    </Link>
                    <HeaderBurger className={`${active ? 'active' : ''}`} onClick={() => setActive(!active)}>
                        <span></span>
                    </HeaderBurger>
                    <Menu className={`${active ? 'active' : ''}`}>
                    <ul className="HeaderList">
                        <li><Link to='/' className="HeaderLink">Главная </Link></li>
                        <li><Link to='/products' className="HeaderLink">Товары</Link></li>
                        <li><Link to='/about' className="HeaderLink">О нас </Link></li>
                        <li><Link to='/contacts' className="HeaderLink">Связаться с нами </Link></li>
                    </ul>
                    </Menu>
                    <Language>
                        <ul>
                            <li><Link to='/about'>Uz </Link></li>
                            <li><Link to='/about'>Ru </Link></li>
                            <li><Link to='/about'>En </Link></li> 
                        </ul> 
                    </Language>
                </HeaderBody>
            </BodyContainer>
        </HeaderSection>
    )
};