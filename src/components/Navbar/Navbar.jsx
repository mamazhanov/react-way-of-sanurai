import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>
                    <div className={s.linkLine}>
                        Profile
                    </div>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>
                    <div className={s.linkLine}>
                        Message
                    </div>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>
                    <div className={s.linkLine}>
                        News
                    </div>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>
                    <div className={s.linkLine}>
                        Music
                    </div>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/setting" activeClassName={s.activeLink}>
                    <div className={s.linkLine}>
                        Setting
                    </div>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;