import { View, Image } from "react-native";
import { Paragraph, Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function CityScr(){
    return(
        <View style={styles.body}>
            <Text style={styles.title}>
                Joinville
            </Text>
            <Image  
            source={require('../img/joidois.jpg')}
            style={{ width: 1300, height: 180, marginLeft: 190}}/>
            <Text style={styles.titleS}>
                Conheça mais da maior cidade de Santa Catarina!
            </Text>
        
            <View style={styles.parag}>
            <Paragraph style={styles.textinho}>
            Joinville é uma cidade brasileira localizada no estado de Santa Catarina, sendo a maior cidade do estado em população. Reconhecida por sua economia diversificada, Joinville destaca-se pela presença de indústrias, comércio e serviços. Além disso, a cidade é conhecida por sua forte influência cultural, evidenciada em eventos como o Festival de Dança de Joinville, um dos maiores do mundo. Com um ambiente propício para o desenvolvimento empresarial e cultural, Joinville combina crescimento econômico com uma rica vida cultural...
            </Paragraph>
            </View>
        </View>
    )
}