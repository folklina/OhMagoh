import { View } from "react-native";
import { styles } from "../utils/styles";
import { Text } from "react-native-paper";

export default function ProfileScr(){
    return(
        <View style={styles.body}>
            <Text style={styles.title}>Olá, </Text>
            <Text style={styles.titleS}>me chamo Carol</Text>
        </View>
    )
}