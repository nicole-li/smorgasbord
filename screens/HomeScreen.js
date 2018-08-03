import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  RefreshControl,
  Modal,
  TextInput,
  Alert
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import { styles } from '../styles/StyleSheet';

import Display from '../components/Display';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: [],
      refreshing: false,
      modalVisible: false,
      title: '',
      multiGet: []
    };
    var mounted;
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.componentDidMount();
    this.setState({refreshing: false});
  }

  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount() {
    this.mounted = true;
    AsyncStorage.getAllKeys()
    .then(result => {
      // console.log(result);
      if (this.mounted) {
        this.setState({
          keys: result
        });
      }
      // console.log(this.state.keys);
    })
    .then(() => {
      AsyncStorage.multiGet(this.state.keys)
      .then(result => {
        this.setState({
          multiGet: result
        });
      })
    })
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  deletePost(key) {
    Alert.alert(
      'Delete Post?',
      'Action cannot be undone',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'},
        {text: 'OK', onPress: () => AsyncStorage.removeItem(key)
        .then(() => this.componentDidMount())},
      ],
      { cancelable: true }
    )
  }

  render() {
    return (
      <View style={styles.container}>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          >
          <View style={styles.contentContainer}>
            <View style={styles.pageContainer}>
              <TextInput
                style={styles.postTitle}
                onChangeText={(text) => this.setState({title: text})}
                value={this.state.text}
              />

              <TouchableOpacity>
                <Text onPress={() => {
                  this.props.navigation.navigate('Write', { name: this.state.title });
                  this.setModalVisible(false);
                }}>Go</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.pageContainer}>
            <TouchableOpacity>
              <Text style={styles.boldText}
                onPress={() => {
                  this.setModalVisible(true)
                }}> + New Page</Text>
            </TouchableOpacity>
          </View>

          {this.state.multiGet.map(set =>
            <Display
              key={this.state.multiGet.indexOf(set)}
              title={set[0]}
              body={JSON.parse(set[1]).text}
              del={(key) => this.deletePost(key)}
              />)}

        </ScrollView>
      </View>
    );
  }
}
