import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, FlatList, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class SettingsScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            isRefreshing: false,
            repos: [],
            totalResults: 0,
            incomplete_results: true,
            page: 0,
            sortBy: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Ionicons name="ios-settings-sharp" size={60} color={"#8e8e93"}/>
                <Text style={styles.title}>Settings</Text>
                <Text style={styles.text}>COMING SOON</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 20
    },
    text: {
        fontSize: 13,
        fontWeight: "600",
        color: 'gray',
        paddingTop: 5
    }
})