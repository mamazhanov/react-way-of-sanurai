import React from "react";
import {Field, reduxForm} from "redux-form";
import style from "./AddPostForm.module.css"
import {maxLenghtCreator, required} from "../../../../utils/validators/validator";
import {Textarea} from "../../../common/FormsControls/FormControls";

const maxLength = maxLenghtCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form className={style.form} onSubmit={props.handleSubmit}>
            <div className={style.textareaBlock}>
                <Field component={Textarea} placeholder={"post message"} validate={[required,maxLength]} name={"newPostText"}/>
            </div>
            <div className={style.btnBlock}>
                <button>Add post</button>
            </div>
        </form>
    )
}

export let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)
