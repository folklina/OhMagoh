import { View } from "react-native";
import { styles } from "../utils/styles";
import { Text } from "react-native-paper";

export default function ProfileScr(){
    return(
        <View style={styles.body}>
            <Text style={styles.titleS}>Olá, me chamo Carol</Text>
            <View style={styles.parag}>
                <Text style={styles.textinho}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis assumenda, ab reprehenderit dolore porro, fugiat sit quasi dolores adipisci odit repudiandae itaque ipsum dignissimos ullam quae beatae. Repudiandae, reprehenderit culpa.</Text>
                <Text style={styles.textinho}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit atque doloremque repellendus officia recusandae ea eligendi sunt similique, aliquid voluptatem minus quasi eos inventore excepturi neque ipsam porro. Provident, veritatis!</Text>
                <Text style={styles.textinho}>✉️ caholiverw@gmail.com</Text>
                <Text style={styles.textinho}>📞 +55 (41) 992594259</Text>

                <Text style={styles.textinho}>Tenho dona. 💍</Text>
            </View>
        </View>
    )
}