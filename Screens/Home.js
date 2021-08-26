import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import RepoItem from '../Components/RepoItem';
import { getReposFromApi } from '../API/api';

export default class HomeScreen extends React.Component {

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

    componentDidMount() {
        
        this._getRepos(false);
    }

    _getRepos = (init) => {
        this.setState({
            isLoading: true
        })
        var page = this.state.page + 1;

        // Calcul date of the 30 days before
        var date_before = new Date();
        date_before.setDate(date_before.getDate() - 30);
        var date = new Date(date_before).toISOString().slice(0, 10);
        console.log("date_before", date.toString());

        getReposFromApi(init ? 1 : page, date)
        .then((data) => {
            if(data.items !== undefined){
                let repos = this.state.repos.concat(data.items);
                this.setState({
                    repos: repos,
                    totalResults: data.total_count,
                    incomplete_results: data.incomplete_results,
                    page: page,
                    isLoading: false,
                    isRefreshing: false,
                })
            }else{
                let repos = this.state.repos.concat(data.items);
                this.setState({
                    repos: [],
                    totalResults: 0,
                    incomplete_results: data.incomplete_results,
                    page: page,
                    isLoading: false,
                    isRefreshing: false,
                })
            }
            
        })
        .catch((err) => {
            console.log(err);
            this.setState({
                repos: [],
                totalResults: 0,
                incomplete_results: false,
                page: page,
                isLoading: false,
                isRefreshing: false,
            })
        })
    }

    render(){
        return (
            <View style={styles.container}>
                <StatusBar style="dark-content" />
                <FlatList
                    data={this.state.repos}
                    style={styles.listRepos}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item, index}) => 
                        <RepoItem repo={item} />
                    }
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if(!this.state.incomplete_results){
                            this._getRepos(false)
                        }
                    }}
                    onRefresh={() => {
                        this.setState({
                            isRefreshing: true,
                            repos: [],
                        })
                        this._getRepos(true)
                    }}
                    refreshing={this.state.isRefreshing}
                />
                {this.state.isLoading ? (
                    <View style={styles.containerLoading}>
                        <ActivityIndicator size="large" color='gray' />
                    </View>
                ): null}
                
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
    },
    containerLoading: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
});