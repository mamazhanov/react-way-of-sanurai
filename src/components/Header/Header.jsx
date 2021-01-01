import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    debugger
    return <header className={s.header}>
        <img src='https://www.freeiconspng.com/thumbs/intel-logo-png/intel-logo-png-0.png'/>

        <div className={s.loginBlock}>
            {
                props.isAuth ? <p>{props.login}</p> : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
}

export default Header;