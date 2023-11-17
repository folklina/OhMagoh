import { View, Image, TouchableOpacity, Linking, StyleSheet } from "react-native";
import { styles } from "../utils/styles";
import { Text } from "react-native-paper";


export default function ProfileScr(){
    return(
        <View style={styles.body}>
            <Text style={styles.titleS}>Olá, me chamo Carol</Text>
            <View style={styles.parag}>
                <Text style={styles.textinhoo}>Tenho 16 anos, faço Técnico em Informática no Senac e concluirei em dois anos. Meus hobbies favoritos são dormir e ser fã da Taylor Swift.
                <br/>
                <br/>
                <Text style={styles.textinhoo}>Amo gatos e minha série favorita é F.R.I.E.N.D.S...
                </Text>
                </Text>
                <Text style={styles.textinhoo}></Text>
                <Text style={styles.titleeS}>Outras formas de contato:</Text>
                <Text style={styles.textinhoooo}>✉️ caholiverw@gmail.com</Text>
                <Text style={styles.textinhoooo}>📞 +55 (41) 992594259</Text>
                
                <Text style={styles.textinhoooo}>Tenho dona. 💍</Text>
                <View style={styles.parag}>
                <Image  
            source={require('../img/gatiti.PNG')}
            style={{ width: 250, height: 250, marginLeft: 670}}/>
        </View>
            </View>
        </View>
    )
}
