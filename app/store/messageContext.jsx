import React, {createContext, useContext, useReducer} from "react";
import group from "../../data/group.json"

const MessageContext = createContext();

const initialState = {
    data: group
}

const messageReducer = (state, action) => {
    switch(action.type){
        case 'ADD_GROUP':
            return {
                data: [...state.data, {id: state.data.length}]
            };
        case 'ADD_MESSAGE':
            return state;
        case 'EDIT_MESSAGE':
            return state;
        case 'DELETE_MESSAGE':
            return state;
        default:
            return state;
    }
}

export const MessageProvider = ({ children }) => {
    const [state, dispatch] = useReducer(messageReducer, initialState);
    return (
        <MessageContext.Provider value={{state, dispatch}}>
            {children}
        </MessageContext.Provider>
    );
};

export const useMessageContext = () => useContext(MessageContext);