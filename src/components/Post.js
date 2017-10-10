/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';

const width = Dimensions.get('screen').width

export default class Post extends Component {
    constructor(props){
        super(props)
        this.state = {
            foto: this.props.foto
        }
    }

    loadIcon(likeada){
        return likeads ? require('../../resources/img/s2-checked.png') : require('../../resources/img/s2.png')
    }

    like(){

        const fotoAtualizada = {
            ...this.state.foto,
            likeada: !this.state.foto.likeada
        }

        this.setState({foto: fotoAtualizada});
    }

    showLikes(likers){
        if(likers.length <= 0)
            return

        return (<Text style={styles.likes}>
                    {likers.length} {likers.length > 1 ? 'curtidas' : 'curtida'}
                </Text>
                );
    }

    render() {
        const {foto} = this.state

        return (
            <View>
              <View style={styles.header}>
                  <Image source={{uri: foto.urlPerfil}}
                          style={styles.profilePicture} />
                        <Text>{foto.loginUsuario}</Text>
              </View>
                <Image source={{uri: foto.urlFoto}}  style={styles.postPhoto} />
                <View style={styles.footer}>
                    <TouchableOpacity onPress={this.like}>
                        <Image style={this.loadIcon(foto.likeada)}/>
                    </TouchableOpacity>
                </View>
                {this.showLikes(foto.likers)}}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilePicture: {
        marginRight: 10,
        borderRadius: 20,
        width: 40,
        height: 40,
    },
    postPhoto: {
            width: width,
            height: width,
        },
    buttonLike:{
        height:40,
        width:40
    },
    footer:{
        margin: 10
    },
    likes:{
        fontWeight: 'bold'
    }
        
});
