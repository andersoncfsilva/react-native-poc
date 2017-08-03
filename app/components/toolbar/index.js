import React, { Component } from 'react';
import { Platform } from 'react-native';
import {
  Header,
  Title,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";

const menuIcon = (Platform.OS === 'android') ? "md-menu" : "ios-menu-outline"
const menuIconColor = (Platform.OS === 'android') ? "#000000" : "#DE1D4A"

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
    };
  }

  render() {
    return (
      <Header style={{ backgroundColor: "#FFFFFF" }} androidStatusBarColor="#B7183D">
        <Left>
          <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
            <Icon name={menuIcon} style={{ color: menuIconColor }} />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: "#000000" }}>Dinda</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

export default Toolbar;