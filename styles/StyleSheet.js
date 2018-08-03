import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingVertical: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'left',
  },
  regularText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'left',
  },
  pageContainer: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  postTitle: {
    height: 40,
    alignSelf: 'stretch',
    borderColor: 'gray',
    borderWidth: 1,
    margin: 15,
    padding: 5,
  },
});
