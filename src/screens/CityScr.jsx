import { View, Image } from "react-native";
import { Paragraph, Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function CityScr(){
    return(
        <View style={styles.body}>
            <Text style={styles.title}>
                Joinville
            </Text>
            <View style={styles.parag}>
            <Paragraph style={styles.textinho}>
                Joinville é uma cidade brasileira localizada no estado de Santa Catarina. É a maior cidade do estado em termos de população e uma das mais importantes economicamente. Fundada em 9 de março de 1851, Joinville é conhecida por sua forte presença industrial, com destaque para setores como metalurgia, química e plásticos.
            </Paragraph>
            <Image  
            source={require('../img/uc.jpg')}
            style={{ width: 265, height: 150 }}/>
            </View>
        </View>
    )
}