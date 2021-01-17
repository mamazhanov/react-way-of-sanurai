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
                           autoFocus
                           value={state.newMessageText}/>
                    <a title={"Send message"} onClick={onSendMessage}>
                        <img src="https://cdn2.iconfinder.com/data/icons/dark-action-bar-2/96/send-512.png" alt="Send"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;