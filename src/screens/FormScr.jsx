import { Button, Paragraph, Text, TextInput } from "react-native-paper";
import { View } from "react-native";
import { styles } from "../utils/styles";


export default function FormScr({navigation}) {
    return (
        <View style={styles.body}>
            {/* <Header title="Adicionar tarefa" /> */}
            <Paragraph style={styles.inputtitle}>Nome</Paragraph>
            <TextInput
                placeholder="Insira o Nome"
                style={styles.textinput}
            />
            <Paragraph style={styles.inputtitle}>Email</Paragraph>
            <TextInput
                placeholder="Insira o Email"
                style={styles.textinput}
            />
            <Paragraph style={styles.inputtitle}>Senha</Paragraph>
            <TextInput
                placeholder="Insira a Senha "
                style={styles.textinput}
            />
            <Button
                mode="contained"
                style={styles.button}
            >
                CADASTRAR
            </Button>

        </View>
    )
}