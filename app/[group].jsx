import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function Group(){
    const {group: groupId} = useLocalSearchParams();
    return (
        <View>
            <Text>{groupId}</Text>
        </View>
    )
}