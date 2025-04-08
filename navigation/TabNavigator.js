import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Page from '../pages/Page';
import SecondPage from '../pages/SecondPage';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName='Page'>
            <Tab.Screen
                name="Page"
                component={Page}
                options={{
                    tabBarLabel: 'Page',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="SecondPage"
                component={SecondPage}
                options={{
                    tabBarLabel: 'Second Page',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="settings" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}