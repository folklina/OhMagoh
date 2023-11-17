import { View, Image, TouchableOpacity, Linking, StyleSheet } from "react-native";
import { styles } from "../utils/styles";
import { Text } from "react-native-paper";


export default function ProfileScr(){
    return(
        <View style={styles.body}>
            <Text style={styles.titleS}>Oláá, me chamo Carol</Text>
            <View style={styles.parag}>
                <Text style={styles.textinhoo}>Tenho 16 anos, faço Técnico em Informática e concluirei em dois anos. Meus hobbies favoritos são dormir e ser fã da Taylor Swift.
                <br/>
                
                </Text>
                <Text style={styles.textinhoo}>Espero que o senhor goste do que tentei fazer ao menos :)</Text>
                <Image  
            source={require('../img/gatiti.PNG')}
            style={{ width: 250, height: 250, marginLeft: 700}}/>
                
                <Text style={styles.titleeS}>Outras formas de contato:</Text>


                <Text style={styles.textinhooo}>Tenho dona. 💍</Text>
                <View style={styles.parag}>

        </View>
            </View>
        </View>
    )
}
