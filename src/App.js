import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  constructor() {
    super();
    this.state = { loggedIn: null };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyArbMTuyCdcx6HGROheBj6dj8iqD4Ni45k',
      authDomain: 'auth-179cf.firebaseapp.com',
      databaseURL: 'https://auth-179cf.firebaseio.com',
      projectId: 'auth-179cf',
      storageBucket: 'auth-179cf.appspot.com',
      messagingSenderId: '739452326003'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button
              onPress={() => {
                firebase.auth().signOut();
              }}
            >
              Log Out
            </Button>
          </CardSection>
        );

      case false:
        return <LoginForm />;

      default:
        return (
          <CardSection>
            <Spinner
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'center'
              }}
              size="large"
            />
          </CardSection>
        );
    }
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
