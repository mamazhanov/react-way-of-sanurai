import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div>
                <NavLink activeClassName={s.activeLink} to={path}>
                    <div className={s.userLine}>
                        <img className={s.userImages} src={props.imageUrl}/>
                        {props.name}
                    </div>
                 </NavLink>
         </div>
    )
}

export default DialogItem;