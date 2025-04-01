import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabScreen from '../pages/TabScreen';
import Tab2 from '../pages/Tab2';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="TabScreen">
            <Tab.Screen 
                name="TabScreen"
                component={TabScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                    tabBarLabel: 'Início', // Adiciona um rótulo personalizado
                }}
            />
            <Tab.Screen 
                name="Tab2" 
                component={Tab2} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="settings" color={color} size={size} />
                    ),
                    tabBarLabel: 'Configurações', // Adiciona um rótulo personalizado
                }}
            />
        </Tab.Navigator>
    );
}