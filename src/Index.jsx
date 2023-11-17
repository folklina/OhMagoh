import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScr from "./screens/ProfileScr";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { Styles, styles } from "./utils/styles";
import ApiScr from "./screens/ApiScr";
import CityScr from "./screens/CityScr";
import FormScr from "./screens/FormScr";

const Stack = createMaterialBottomTabNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                activeColor="#fff"
                shifting={true}
                barStyle={{ backgroundColor: "#0D0D0D" }}
            >
                <Stack.Screen
                    name="Home"
                    component={MyTab}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }} />
                <Stack.Screen
                    name="Perfil"
                    component={ProfileScr}

                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account" color={color} size={26} />
                        ),

                    }} />
                    <Stack.Screen
                    name="Cidade"
                    component={CityScr}

                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="apple-icloud" color={color} size={26} />
                        ),
                    }}
                    />
                    <Stack.Screen
                    name="Formulário"
                    component={FormScr}

                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="bacteria-outline" color={color} size={26} />
                        ),
                    }}
                    />
                    <Stack.Screen
                    name="Api"
                    component={ApiScr}

                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="alien" color={color} size={26} />
                        ),
                    }}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Tab = createNativeStackNavigator();

function MyTab() {
    return (
        <View style={styles.body}>
            <Text style={styles.title}>É sor, ta ai meu trabalho</Text>
        </View>
    )
}