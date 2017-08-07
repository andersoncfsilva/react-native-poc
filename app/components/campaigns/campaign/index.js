import React, { Component } from 'react';
import {
  ListItem, Text, List,
  Content, Card, CardItem,
  Thumbnail, Button,
  Icon, Left, Body, Right
} from 'native-base';
import { View, RefreshControl, Image } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid';
import ImageLoad from '../../imageload';

class Campaign extends Component {
  constructor(props) {
    super(props);
  }

  _renderRow(product) {
    return (
      <Card transparent>
        <CardItem style={{ paddingLeft: 0, paddingRight: 0, paddingTop: 0 }}>
          <ImageLoad
            source={{ uri: product.mobile_image_url }}
            style={{ height: 110, width: null, flex: 1 }} />
        </CardItem>
        <CardItem>
          <Text>{product.erp_code}</Text>
        </CardItem>
      </Card>
    );
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Text style={{
            flex: 1,
            height: 20,
            textAlign: 'center',
            fontSize: 14,
            fontWeight: '600',
            color: '#616161'
          }}>{this.props.campaign.name}</Text>
        </CardItem>
        <CardItem cardBody>
          <ImageLoad
            source={{ uri: this.props.campaign.mobile_image_url }}
            style={{ height: 110, width: null, flex: 1 }} />
        </CardItem>
        <CardItem>
          <List
            horizontal={true}
            dataArray={this.props.campaign.products}
            renderRow={this._renderRow}
          />
        </CardItem>
      </Card>
    );
  }
}

export default Campaign;