import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Drawer
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class DindaMobile extends Component {
  render() {
    var items = ['Simon Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Emre Can'];
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };

    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Text>{"Menu"}</Text>}
        onClose={() => closeDrawer()} >
        <Container>
          <Header>
            <Left>
              <Button
                transparent
                onPress={() => openDrawer()}
              >
                <Icon name="menu" />
              </Button>
            </Left>
          </Header>
          <Content>
            <List dataArray={items}
              renderRow={(itemParent) =>
                <ListItem style={{ borderBottomWidth: 0, paddingBottom: 0, paddingTop: 0 }}>
                  <Card>
                    <CardItem>
                      <Left>
                        <Body>
                          <Text>NativeBase</Text>
                          <Text note>GeekyAnts</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem>
                      <List dataArray={items} horizontal={true}
                        renderRow={(item) =>
                          <ListItem style={{ borderBottomWidth: 0 }}>
                            <Text>{item}</Text>
                          </ListItem>
                        }>
                      </List>
                    </CardItem>
                  </Card>
                </ListItem>
              }>
            </List>
          </Content>
        </Container >
      </Drawer>
    );
  }
}
