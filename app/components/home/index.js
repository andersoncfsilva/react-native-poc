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

// import ReactNativeUA from 'react-native-ua'; // import module

export default class Home extends Component {

  constructor(props) {
    super(props);

    // ReactNativeUA.enable_notification(); // prompt user to enable notification

    // ReactNativeUA.add_tag('react_native_test'); // set tag to the user

    // ReactNativeUA.set_named_user_id('anderson.silva@dinda.com.br'); // set named user idÎ

  }

  componentWillMount() {
    // // add handler to handle all incoming notifications
    // ReactNativeUA.on_notification((notification) => {
    //   console.log('notification:',
    //     notification.url, // if action url is disabled
    //     notification.platform,
    //     notification.event,
    //     notification.alert,
    //     notification.data);

    //   alert(notification.alert);
    // });

    // // Check if user enabled notifications
    // ReactNativeUA.are_notifications_enabled().then(enabled => {
    //   console.log('notifications enabled:', enabled);
    // })

    // // Get channel id for device
    // ReactNativeUA.get_channel_id().then(channelId => {
    //   console.log('channel id:', channelId);
    // })
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
