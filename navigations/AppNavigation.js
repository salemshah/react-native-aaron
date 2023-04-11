import React from 'react';
import {Platform, Text} from "react-native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import routes from "./routes";
import EmpreinteScreen from "../screens/EmpreinteScreen";
import Ticket from "../screens/Ticket";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";
import Offre from "../screens/Offre";
import Profil from "../screens/Profil";

const Tab = createBottomTabNavigator()
const AppNavigation = () => {

    return (
        <Tab.Navigator initialRouteName={routes.TICKETS} screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: Platform.OS === "ios" ? 90 : 65,
                paddingVertical: 10,
            }
        }}>
            <Tab.Screen name={routes.EMPREINTE} component={EmpreinteScreen} options={{
                tabBarLabel: ({focused}) => <Label focused={focused} text="Empreinte"/>,
                tabBarIcon: ({color, focused}) => (
                    <Icon name="cloud-outline" focused={focused}/>
                ),
            }}/>
            <Tab.Screen name={routes.TICKETS} component={Ticket} options={{
                tabBarLabel: ({focused}) => <Label focused={focused} text="Tickets"/>,
                tabBarIcon: ({color, focused}) => (
                    <Icon name="bookmark-outline" focused={focused}/>
                ),
            }}/>
            <Tab.Screen name={routes.OFFRES} component={Offre} options={{
                tabBarLabel: ({focused}) => <Label focused={focused} text="Offres"/>,
                tabBarIcon: ({focused}) => (
                    <Icon name="tag-outline" focused={focused}/>
                ),
            }}/>
            <Tab.Screen name={routes.PROFIL} component={Profil} options={{
                tabBarLabel: ({focused}) => <Label focused={focused} text="Profil"/>,
                tabBarIcon: ({focused}) => <Icon name="account-circle-outline" focused={focused}/>,
            }}/>
        </Tab.Navigator>
    );
};

const Label = ({focused, text}) => (<Text style={{color: focused ? colors.primary : colors.black}}>{text}</Text>)
const Icon = ({focused, name}) => <MaterialCommunityIcons name={name} color={focused ? colors.primary : colors.black}
                                                          size={30}/>


export default AppNavigation;