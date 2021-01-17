import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import myLogo from '../../assets/images/mylogo.jpg'

const Header = (props) => {

    //const myLogo = 'https://sun9-5.userapi.com/impf/g3BEmF5nkEWNSlK2RbcXysct0zHlFv-D3YP6aQ/1wqV4UjNcGo.jpg?size=1080x891&quality=96&proxy=1&sign=8ad0e2f4aff146801787141ecbac7943&type=album';
    return <header className={s.header}>
        <img src={myLogo}/>

        <div className={s.loginBlock}>
            {
                props.isAuth ? <p>{props.login}</p> : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
}

export default Header;