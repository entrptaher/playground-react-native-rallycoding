import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { Header, Button, CardSection, Spinner } from "./components/common";
import reducers from './reducers';
import LibraryList from './components/LibraryList';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{flex: 1}}>
          <Header headerText="Tech Stack" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}
