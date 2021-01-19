import React from "react";
import {Field, reduxForm} from "redux-form";
import style from "./AddMessageForm.module.css"


const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={"input"} name={"newMessageBody"} />
            <button className={style.btn}>send</button>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);
