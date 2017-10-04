/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  ScrollView
} from 'react-native';

const width = Dimensions.get('screen').width

export default class Post extends Component {
    render() {
        return (
            <View>
              <View style={styles.header}>
                  <Image source={{uri: this.props.foto.urlPerfil}}
                          style={styles.profilePicture} />
                        <Text>{this.props.foto.loginUsuario}</Text>
              </View>
                <Image source={{uri: this.props.foto.urlFoto}}
                  style={styles.postPhoto} />
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
});

AppRegistry.registerComponent('InstaMobile', () => InstaMobile);
