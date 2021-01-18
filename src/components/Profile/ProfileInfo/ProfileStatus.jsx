import React from 'react';

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = React.useState(false);

    let activateEditMode = () => {
        setEditMode(true);
    }
    let deactivateEditMode = () => {
        setEditMode(false);
    }
    
    return (
        <div>
            {
                editMode
                    ? <div>
                        <input onBlur={deactivateEditMode}
                               type="text"
                               value={props.status}
                               autoFocus
                        />
                    </div>
                    : <div>
                        <span onDoubleClick={activateEditMode}>{props.status}</span>
                    </div>
            }
        </div>
    )
}

export default ProfileStatus;