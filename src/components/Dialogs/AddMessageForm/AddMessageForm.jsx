import React from "react";
import {Field, reduxForm} from "redux-form";
import style from "./AddMessageForm.module.css"
import {Input} from "../../common/FormsControls/FormControls";
import {maxLenghtCreator, required} from "../../../utils/validators/validator";

let maxLength = maxLenghtCreator(10);

const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Input} validate={[required,maxLength]} name={"newMessageBody"} />
            <button className={style.btn}>send</button>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);
