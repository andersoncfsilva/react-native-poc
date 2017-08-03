import React, { Component } from "react";
import { Platform } from 'react-native';
import Toolbar from "../toolbar";
import Campaigns  from '../campaigns';

import {
  Container,
  Header,
  Title,
  Content,
  Text,
  H3,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body
} from "native-base";

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
    };
  }

  render() {
    return (
      <Container>
        <Toolbar {...this.props} />
        <Content padder>
          <Campaigns {...this.props} />
        </Content>
      </Container>
    );
  }
}
