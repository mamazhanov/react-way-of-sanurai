const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych', imageUrl: 'https://img.icons8.com/bubbles/2x/user-male.png'},
        {id: 2, name: 'Andrew', imageUrl: 'https://img.icons8.com/nolan/2x/checked-user-male.png'},
        {id: 3, name: 'Sveta', imageUrl: 'https://img.icons8.com/color/2x/user-male-circle.png'},
        {id: 4, name: 'Sasha', imageUrl: 'https://img.icons8.com/plasticine/2x/user.png'},
        {id: 5, name: 'Viktor', imageUrl: 'https://img.icons8.com/bubbles/2x/user-male.png'},
        {id: 6, name: 'Valera', imageUrl: 'https://img.icons8.com/doodle/2x/user-male-circle.png'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageText: 'React way'
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 6,
                message: state.newMessageText
            };
            let stateCopy = {...state};
            stateCopy.massages = {...state.massages};
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT:{
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export default dialogsReducer;