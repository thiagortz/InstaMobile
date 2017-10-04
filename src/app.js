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

import Post from './components/Post'

const width = Dimensions.get('screen').width

class InstaMobile extends Component {

  constructor(){
    super();
    this.state = {
      fotos:[]
    }
  }

  componentDidMount(){
    fetch('https://instalura-api.herokuapp.com/')
    .then(resp => resp.json())
    .then(json => this.setState({fotos: json}))
  }

  render() {
      return (
          <FlatList style={styles.container}
              keyExtractor={item => item.id}
              data={this.state.fotos}
              renderItem={ ({item}) =>
                <Post foto={item}/>
              }
          />
      );
  }
}

const styles = StyleSheet.create({
  container: {
     marginTop: 20,
  },
});

export default () =>{
  AppRegistry.registerComponent('InstaMobile', () => InstaMobile);
}
