import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

function Screen1() {
    return (
        <View>
            <Text>Screen 1</Text>
        </View>
    );
}

function Screen2() {
    return (
        <View>
            <Text>Screen 2</Text>
        </View>
    );
}

export default function TabNavigator() {
    return (
        <Tab.navigator>
            <Tab.Screen name="Screen1" component={Screen1} />
            <Tab.Screen name="Screen2" component={Screen2} />
        </Tab.navigator>
    );
}