import React from 'react';

import { 
    StyleSheet, 
}  from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../Screens/Home';

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

// const StackSearch = createStackNavigator();

// function StackSearchScreen() {

//     return (
//         <StackSearch.Navigator initialRouteName="Search">
//             <StackSearch.Screen
//                 name="Search"
//                 component={SearchScreen}
//                 options={{ title: 'Search', headerTitleStyle: { alignSelf: 'center' }, headerShown: false }}
//             />
//             <StackSearch.Screen
//                 name="DetailMovie"
//                 component={DetailMovieScreen}
//                 options={{ title: 'DetailMovie', headerTitleStyle: { alignSelf: 'center' }, headerShown: false }}
                
//             />

//         </StackSearch.Navigator>
//     );
// }

const Tab = createBottomTabNavigator();

const customTabBarStyle = {
    showLabel: true,
    showIcon: true,
    
    style: {
        height: 55,
        backgroundColor: "#f7f6f6",
        borderTopWidth: 1,
        // elevation: 20,
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
                    <Tab.Screen name="SearchTab" component={StackHomeScreen} 
                        options={{
                            tabBarIcon: (item) => {
                                return <Ionicons name="ios-settings-sharp" size={24} color={item.focused ? "#0076ff" : "#8e8e93"} />
                            },
                            title: 'Settings'
                        }}
                    />
                    {/* <Tab.Screen name="FavoritesTab" component={StackFavoritesScreen} 
                        options={{
                            tabBarIcon: (item) => {
                                return <Feather name="heart" size={24} style={[styles.icon, {backgroundColor: item.focused ? Colors.backgroundIconTab : null}]}  color={item.focused ? Colors.ColorIconTab : Colors.ColorInactiveIconTab} />
                            },
                            headerShown: false
                        }}
                    /> */}
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

export default TabNavigator

const styles = StyleSheet.create({
    icon: {
        // padding: 5,
        // borderRadius: 6
    }
});