import React, { Component } from 'react';
import {
  AsyncStorage,
  AppRegistry,
  TextInput,
  ScrollView,
  RefreshControl
} from 'react-native';

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello World',
    };
  }

  componentDidMount(){
    AsyncStorage.getItem(this.props.name)
    .then(result => {
      var parsedResult = JSON.parse(result);
      this.setState({text: parsedResult.text})
    })
    .catch(err => console.log(err));
  }

  changeText(text) {
    AsyncStorage.setItem(this.props.name, JSON.stringify(text))
  }

  render() {
    return (
        <TextInput
          style={{
            minHeight: 500,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 15,
            padding: 5,
            alignSelf: 'stretch'
          }}
          onChangeText={(text) => this.changeText({text})}
          value={this.state.text}
          multiline={true}
        />
    );
  }
}
