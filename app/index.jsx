import { FlatList, Text, View } from "react-native";
import { Link } from "expo-router";
import { IconSymbol } from "./components/IconSymbol";
import { useMessageContext } from "./store/messageContext";


const Home = ()=> {
    const { state, dispatch } = useMessageContext();
    const group = state["data"];

    return (
        <FlatList
            data = {group}
            renderItem={({item}) => (
                <Link
                    href={{
                        pathname: "/[group]",
                        params: {group: item["Id"]}         
                    }}
                >
                    <View style={style.cardBox}>
                        <View style={style.title}>
                            <Text style={style.titleFont}>{[item["label"]]}</Text>
                        </View>
                        <IconSymbol name="chevron.right" color="#FFFFFF" />
                    </View>
                </Link>
            )}
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{
                padding: 16,
                gap: 16
            }}
        />
    )
}

export default Home;

const style = {
    cardBox: {
        gap: 6,
        padding: 16,
        width: "100%",
        borderRadius: 16,
        alignItems: "Center",
        flexDirection: "row",
        backgroundColor: "#007AFF",
        justifyContent: "space-between"
    },
    title: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4
    },
    titleFont: {
        fontSize: 17,
        color: "#FFFFFF"
    }
}