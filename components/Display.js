import React from 'react';
import {
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  View,
  Modal
} from 'react-native';

import Page from '../components/Page';

import { styles } from '../styles/StyleSheet';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.pageContainer}>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          >
          <ScrollView style={styles.contentContainer}>
            <View style={styles.pageContainer}>
              <Text style={styles.boldText}>{this.props.title}</Text>
              <Page name={this.props.title}/>
              <TouchableOpacity>
                <Text onPress={() => {
                  this.setModalVisible(false);
                }}>Close</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Modal>
        <View style={{alignSelf: 'stretch'}}>
          <TouchableOpacity>
            <Text
              style={styles.boldText}
              onPress={() => {this.setModalVisible(true)}}
              onLongPress={() => this.props.del(this.props.title)}
            >{this.props.title}</Text>
          </TouchableOpacity>
            <Text style={styles.regularText}>{this.props.body}</Text>
        </View>
      </View>
    );
  }
}
