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
  Dimensions
} from 'react-native';

const width = Dimensions.get('screen').width

export default class InstaMobile extends Component {
    render() {
        const fotos = [
            {id: 1, usuario: 'rafael'},
            {id: 2, usuario: 'alberto'},
            {id: 3, usuario: 'vitor'}
        ];

        return (
            <FlatList style={{marginTop: 20}}
                keyExtractor={item => item.id}
                data={fotos}
                renderItem={ ({item}) =>
                    <View>
                        <Text>{item.usuario}</Text>
                        <Image source={require('./resources/img/sharon.jpg')}
                          style={{width: width, height: width}} />
                    </View>
                }
            />
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('InstaMobile', () => InstaMobile);
