import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {


    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} imageUrl={d.imageUrl}/>  );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id}/> );

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
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
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;