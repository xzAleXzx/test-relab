import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = (props: { children: ReactNode}) => {
    const location = useLocation();

    return (
        <>
            <ul className="nav nav-pills mt-3">
                <li className="nav-item ms-3">
                    <Link className={'nav-link ' + (location.pathname === '/' ? 'active' : '')} aria-current="page" to="/">Главная страница</Link>
                </li>
                <li className="nav-item ms-3">
                    <Link className={'nav-link ' + (location.pathname === '/store' ? 'active' : '')} aria-current="page" to="/store">Магазин</Link>
                </li>
                <li className="nav-item ms-3">
                    <Link className={'nav-link ' + (location.pathname === '/login' ? 'active' : '')} aria-current="page" to="/login">Авторизация</Link>
                </li>
            </ul>
            {props.children}
        </>

    )
}

export default NavBar;