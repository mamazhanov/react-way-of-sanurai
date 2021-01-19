import React from "react";
import {Field, reduxForm} from "redux-form";
import style from "./AddPostForm.module.css"


const AddNewPostForm = (props) => {
    return (
        <form className={style.form} onSubmit={props.handleSubmit}>
            <div className={style.textareaBlock}>
                <Field component={"textarea"}  name={"newPostText"}/>
            </div>
            <div className={style.btnBlock}>
                <button>Add post</button>
            </div>
        </form>
    )
}

export let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)
