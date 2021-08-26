import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../Screens/Home';
import SettingsScreen from '../Screens/Settings';

const Stack = createStackNavigator();

function StackHomeScreen({route, navigation}) {

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Trending Repos', headerTitleStyle: { alignSelf: 'center' }, headerShown: true }}
            />
        </Stack.Navigator>
    );
}

const StackSettings = createStackNavigator();

function StackSettingsScreen() {

    return (
        <StackSettings.Navigator initialRouteName="Search">
            <StackSettings.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{ title: 'Settings', headerTitleStyle: { alignSelf: 'center' }, headerShown: true }}
            />
        </StackSettings.Navigator>
    );
}

const Tab = createBottomTabNavigator();

const customTabBarStyle = {
    showLabel: true,
    showIcon: true,
    
    style: {
        height: 55,
        backgroundColor: "#f7f6f6",
        borderTopWidth: 1,
    }
}

class TabNavigator extends React.Component {

    constructor(props) {
        super(props)
    }

    render(){

        
        return (
            <NavigationContainer>
                <Tab.Navigator 
                    screenOptions={{
                        "tabBarActiveTintColor": "#0076ff",
                        "tabBarInactiveTintColor": "#8e8e93",
                        
                    }}
                    tabBarOptions={customTabBarStyle}
                    sceneContainerStyle={{ 
                        backgroundColor: "white"
                    }}
                    initialRouteName="HomeTab"
                >
                    <Tab.Screen name="HomeTab" component={StackHomeScreen} 
                        options={{
                            tabBarIcon: (item) => {
                                return <Entypo name="star" size={30} color={item.focused ? "#0076ff" : "#8e8e93"} />
                            },
                            title: 'Trending'
                        }}
                    />
                    <Tab.Screen name="SearchTab" component={StackSettingsScreen} 
                        options={{
                            tabBarIcon: (item) => {
                                return <Ionicons name="ios-settings-sharp" size={24} color={item.focused ? "#0076ff" : "#8e8e93"} />
                            },
                            title: 'Settings',
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

export default TabNavigator
