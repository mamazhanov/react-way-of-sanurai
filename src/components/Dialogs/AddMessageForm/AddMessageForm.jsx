import React from "react";
import {Field, reduxForm} from "redux-form";


const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={"input"} name={"newMessageBody"} />
            <button>send</button>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);
