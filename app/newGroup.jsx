import { useState } from "react";
import {View, Text, Button} from "react-native";
import { Stack, useRouter } from "expo-router";
import { useMessageContext } from "./store/messageContext";
import Input from "./components/input";

export default function newGroup() {
    const [group, setGroup] = useState("");
    const { state, dispatch } = useMessageContext();
    const router = useRouter();

    const handleCreateGroup = (group) => {
        dispatch({type: "ADD_GROUP", payload: {groupName: group}});
        router.back();
    }

    return (
        <>
            <Stack.Screen 
                options={{
                    headerRight: () => 
                        <Button 
                            title="Create"
                            disabled={group === ""}
                            onPress={() => handleCreateGroup(group)}
                        />
                }}
            />
            <View style={{padding: 16, gap: 16}}>
                <Text>New Group</Text>
                <Input
                    placeholder = "Group Name"
                    value = {group}
                    onChangeText = {setGroup}
                    maxLength={200}
                />
            </View>
        </>
    )
}