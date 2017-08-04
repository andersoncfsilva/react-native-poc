import React, { Component } from 'react';
import { ListItem, Text, List, Content } from 'native-base';
import { View, RefreshControl } from 'react-native'
import CampaignsService from '../../network/CampaignsService';

export default class Campaigns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      dataSource: []
    }
  }

  _onRefresh() {
    console.log("call refresh")
    CampaignsService.gethome((responseJson) => {
      this.setState({
        refreshing: false,
        dataSource: responseJson.movies,
      });
    })
  }

  componentDidMount = () => {
    this.setState({ refreshing: true });
    this._onRefresh()
  }

  renderRow(rowData) {
    return (
      <ListItem><Text>{rowData.title}, {rowData.releaseYear}</Text></ListItem>
    )
  }

  render() {
    return (
      <Content refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => { this.setState({ refreshing: true });
    ; this._onRefresh()}}
            />
          }>
        <List
          
          dataArray={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </Content>
    );
  }
}