import { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";

export default function MessageBox(props){
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(props.value["msg"]);
    const [index, setIndex] = useState(props.value["Id"]);

    const editText = (txt) => {
        setValue(txt);
    }

    const handleBlur = () =>{
        props.editText(value, index);  // only commit the change to parent component until blur
        setIsEditing(false);
    }

    return (
        <View style={style.messageBox}>
            {
                isEditing ? (
                    <TextInput
                        value={value}
                        onChangeText={editText}
                        onBlur={handleBlur}
                        autoFocus
                    />
                ) : (
                <TouchableOpacity onPress={() => setIsEditing(true)}>
                    <Text>{value}</Text>
                </TouchableOpacity>
                )
            }
        </View>
    )
}

const style = {
    messageBox: {
        backgroundColor: "#007AFF",
        flex: 1,
        padding: 10,
        borderRadius: 10
    }
}