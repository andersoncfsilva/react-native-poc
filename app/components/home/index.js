import React, { Component } from "react";
import { Platform } from 'react-native';
import Toolbar from "../toolbar";
import Campaigns from '../campaigns';

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
  }

  render() {
    return (
      <Container>
        <Toolbar {...this.props} />
        <Campaigns {...this.props} />
      </Container>
    );
  }
}
