import React, { Component } from 'react';
import { Root } from "native-base";
import Home from "./components/home/";
import { StackNavigator } from "react-navigation";
import Drawer from "./Drawer";

const AppNavigator = StackNavigator(
    {
        Drawer: { screen: Drawer }
    },
    {
        initialRouteName: "Drawer",
        headerMode: "none",
    }
);

export default class DindaMobile extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  render() {
    return <Root>
      <AppNavigator />
    </Root>;
  }
}
