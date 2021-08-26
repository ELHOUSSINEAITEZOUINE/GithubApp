import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default class RepoItem extends React.Component {

    _getNbStars = () => {
        const stars = this.props.repo.stargazers_count !== null ? parseInt(this.props.repo.stargazers_count) : null;

        if(stars !== null){
            if(stars > 999){
                if(stars < 1000*1000){
                    var rate = stars/1000;
                    return rate.toString().length == 1 ? (rate+"K") : (rate.toFixed(1))+"K";
                }else{
                    var rate = stars/1000000;
                    return rate.toString().length == 1 ? (rate+"M") : (rate.toFixed(1))+"M";
                }
            }
            return stars
        }else{
            return ""
        }
        
    }

    render(){
        const repo = this.props.repo;
        return (
            <View style={styles.container}>
                <Text style={styles.name}>{repo.name}</Text>
                <Text 
                    style={styles.description} 
                    numberOfLines={2}
                >
                        {repo.description}
                </Text>
                <View style={styles.infosRepo}>
                    <View style={styles.rowOwner}>
                        {repo.owner.avatar_url !== null ?
                            (
                                <Image 
                                    source={{ uri: repo.owner.avatar_url }}
                                    style={styles.avater}
                                />
                            ):
                            (
                                <FontAwesome5 name="user-circle" size={24} color="black" />
                            )
                        }
                        <Text style={styles.nameUser}>{repo.owner.login}</Text>
                    </View>
                    <View style={styles.rowRate}>
                        <Entypo name="star" size={18} color="black" />
                        <Text style={styles.nbStars}>{this._getNbStars()}</Text>
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
        paddingHorizontal: 30,
        borderBottomWidth: 0.5,
        borderColor: '#C5C5C5'
    },
    infosRepo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowOwner: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowRate: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
        
    },
    description: {
        paddingVertical: 10,
        fontSize: 15,
        color: 'gray',
    },
    avater: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'gray'
    },
    nameUser: {
        fontSize: 14,
        fontWeight: '600',
        paddingStart: 10,
        paddingEnd: 10
    },
    nbStars: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingStart: 2,
    }

})

