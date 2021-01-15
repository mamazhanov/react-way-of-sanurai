import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {


    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} imageUrl={d.imageUrl}/>  );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id}/> );


    let onSendMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messagesItem}>
                <div className={s.massagesWindow}>
                    { messagesElements }
                </div>
                <div className={s.addMessageBlock}>
                    <input onChange={onMessageChange}
                           value={state.newMessageText}/>
                    <a title={"Send message"} onClick={onSendMessage}>
                        <img src="https://www.flaticon.com/svg/vstatic/svg/565/565340.svg?token=exp=1607084845~hmac=462596f1846220ffc40f684183fcdc18" alt="Send"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;