import React, { Component } from 'react';
import {
  ListItem, Text, List,
  Content, Card, CardItem,
  Thumbnail, Button,
  Icon, Left, Body, Right
} from 'native-base';
import { View, RefreshControl, Image } from 'react-native'
import CampaignsService from '../../network/CampaignsService';
import Campaign from './campaign';

export default class Campaigns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      dataSource: []
    }
  }

  _onRefresh() {
    CampaignsService.gethome((responseJson) => {
      this.setState({
        refreshing: false,
        dataSource: responseJson.items,
      });
    })
  }

  componentDidMount = () => {
    this.setState({ refreshing: true });
    this._onRefresh()
  }

  _renderRow(data) {
    if (data.campaign)
      return ( <Campaign campaign={data.campaign} /> )
    else if (data.banner)
      return (
        <ListItem><Text>{data.banner.title}, {data.banner.slug}</Text></ListItem>
      )
    else
      return null
  }

  render() {
    return (
      <Content refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={() => {
            this.setState({ refreshing: true });
            this._onRefresh()
          }}
        />
      }>
        <List
          style={{paddingLeft: 8, paddingRight: 8}}
          dataArray={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </Content>
    );
  }
}