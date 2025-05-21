import { useLocalSearchParams, Stack } from "expo-router";
import { View, Text, KeyboardAvoidingView, Platform, TextInput, Pressable } from "react-native";
import { useMessageContext } from "./store/messageContext";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/elements";
import { LegendList } from "@legendapp/list";
import { IconSymbol } from "./components/IconSymbol"

export default function Group(){
    const {group: groupId} = useLocalSearchParams();
    if(!groupId)
        return <Text>We cannot find this group</Text>

    const {state, dispatch} = useMessageContext();
    const initialMessages = state["data"].find(group => group["Id"].toString() == groupId)["messages"];
    const [messages, setMessages] = useState(initialMessages);
    const [newMessage, setNewMessage] = useState("");
    const headerHeight = Platform.OS === "ios" ? useHeaderHeight() : 0;

    const sendMessage = () =>{
        if(newMessage.trim() === ""){
            return;
        }

        dispatch({type: "ADD_MESSAGE", payload: {"GroupId": groupId, "msg": newMessage}});
        const newMsgList = [...messages, newMessage];
        setMessages(newMsgList);
        setNewMessage("");
    }

    return (
        <>
            <Stack.Screen options={{title: "Message"}} />
            <SafeAreaView style={{flex: 1}} edges={["bottom"]}>
                <KeyboardAvoidingView 
                    style={{flex: 1}} 
                    behavior="padding"
                    keyboardVerticalOffset={headerHeight}
                >
                    <LegendList 
                        data={messages}
                        renderItem={messageBox}
                        contentContainerStyle={{padding: 10}}
                        recycleItems={true}
                        initialScrollIndex={messages.length - 1}
                        alignItemsAtEnd
                        maintainScrollAtEnd
                        maintainScrollAtEndThreshold={0.5}
                        maintainVisibleContentPosition
                        estimatedItemSize={100}
                    />
                    <View style={style.textbox}>
                        <TextInput
                            placeholder="message"
                            value={newMessage}
                            onChangeText={setNewMessage}
                            style={style.textboxField}
                            multiline
                            placeholderTextColor="#666666"
                        />
                        <Pressable
                            disabled={newMessage === ""}
                            style={style.textboxPressable}
                            onPress={sendMessage}
                        >
                            <IconSymbol name="paperplane" color={newMessage==="" ? "#666666" : "#232323"} />
                        </Pressable>
                    </View>

                </KeyboardAvoidingView>
            </SafeAreaView>  
        </>
    )
}

const style = {
    textbox: {
        borderWidth: 1,
        borderColor: "#666666",
        borderRadius: 20,
        flowDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        marginHorizontal: 10
    },
    textboxField: {
        minHeight: 40,
        color: "#000000",
        flexGrow: 1,
        padding: 10,
        flexShrink: 1
    },
    textboxPressable: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    messageBoxWrapper: {
        padding: 10,
        borderRadius:10,
        flowDirection: "row",
        gap: 6,
        maxWidth: "80%",
        alignSelf: "flex-end"
    },
    messageBox: {
        backgroundColor: "#666666",
        flex: 1,
        padding: 10,
        borderRadius: 10
    }
};

const messageBox = ({item}) => (
    <View style={style.messageBoxWrapper}>
        <View style={style.messageBox}>
            <Text>{item}</Text>
        </View>
    </View>
);