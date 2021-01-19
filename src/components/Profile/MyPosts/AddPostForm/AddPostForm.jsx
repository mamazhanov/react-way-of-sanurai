import React from "react";
import {Field, reduxForm} from "redux-form";


const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newPostText"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)
