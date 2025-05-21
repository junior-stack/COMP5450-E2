import { TextInput, StyleSheet } from "react-native";

export default function Input(props){
    const {style, ...rest} = props;

    return (
        <TextInput
            {...rest}
            style={
                StyleSheet.flatten([
                    {
                        padding: 18,
                        fontSize: 16,
                        borderRadius: 10,
                        backgroundColor: "#666666",
                        color: "#fff"
                    },
                    style
                ])
            }
        />
    )
}

