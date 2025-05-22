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
                data: [...state.data, {id: state.data.length, "label": action.payload["groupName"]}]
            };
        case 'ADD_MESSAGE':
            groupId = action.payload["GroupId"];
            state.data[groupId]["messages"].push({"Id": action.payload["msgIndex"], "msg": action.payload["msg"]})
            return state;
        case 'EDIT_MESSAGE':
            const msg = action.payload["msg"];
            groupId = action.payload["GroupId"];
            index = state.data[groupId]["messages"].findIndex(item => item["Id"] == action.payload["msgIndex"]);
            state.data[groupId]["messages"][index] = {"Id": action.payload["msgIndex"], "msg": msg};
            return state;
        case 'DELETE_MESSAGE':
            groupId = action.payload["GroupId"];
            index = state.data[groupId]["messages"].findIndex(item => item["Id"] == action.payload["msgIndex"]);
            state.data[groupId]["messages"].splice(index, 1);
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