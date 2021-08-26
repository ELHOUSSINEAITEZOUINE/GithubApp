import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class RepoItem extends React.Component {

    render(){
        const repo = this.props.repo;
        return (
            <View style={styles.container}>
                <Text>{repo.name}</Text>
                <Text>{repo.description}</Text>
                <View style={styles.infosRepo}>
                    <View style={styles.row}>
                        <Text>{repo.owner.login}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text>{repo.stargazers_count}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 0.5,
        borderColor: '#C5C5C5'
    },
    infosRepo: {
        flexDirection: 'row',
        flex: 1,
    },
    row: {
        flex: 1,
    },
})

