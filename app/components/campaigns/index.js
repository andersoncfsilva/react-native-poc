import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { ActivityIndicator, View, ListView, RefreshControl } from 'react-native'
import CampaignsService from '../../network/CampaignsService';

export default class Campaigns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null
    }
  }

  onRefresh() {
    this.state.isLoading = true;
    CampaignsService.gethome((responseJson) => {
      let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson.movies),
      }, function () {
        // do something with new state
      });
    })
  }

  componentDidMount = () => {
    this.onRefresh()
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isLoading}
            onRefresh={this.onRefresh.bind(this)}
          />
        }
        renderRow={(rowData) => <ListItem><Text>{rowData.title}, {rowData.releaseYear}</Text></ListItem>}
      />
    );
  }
}