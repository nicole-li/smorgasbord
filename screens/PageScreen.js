import React from 'react';
import {
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import Page from '../components/Page';

import { styles } from '../styles/StyleSheet';

export default class PageScreen extends React.Component {
  static navigationOptions = {
    title: 'Write',
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.pageContainer}>
          <Text style={styles.boldText}>
            {this.props.navigation.getParam('name', 'text')}
          </Text>
          <Page name={this.props.navigation.getParam('name', 'text')}/>
        </View>
      </ScrollView>
    );
  }
}
