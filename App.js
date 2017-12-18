/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Container,Header,Item,Input,Icon,Text} from 'native-base';
export default class search extends Component{
  render(){
    return(
      <Container>
        <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          </Item>
          </Header>
          </Container>
    );
  }
}
    
  
