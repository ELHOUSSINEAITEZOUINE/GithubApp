import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, FlatList, Picker } from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import RepoItem from '../Components/RepoItem';

import { data } from "../data/data";
// import { getBestMoviesFromApi } from '../API/API';

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            isRefreshing: false,
            repos: data,
            totalPages: 0,
            totalResults: 0,
            page: 0,
            sortBy: ''
        }
    }

    componentDidMount() {
        // console.log('data', data);
    }

    render(){
        return (
            <View style={styles.container}>
                <StatusBar style="dark-content" />
                <FlatList
                    data={this.state.repos}
                    style={styles.listRepos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => 
                        <RepoItem repo={item} />
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    listRepos: {
        flex: 1,
    }
});