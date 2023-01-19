import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {backgroundColor: 'white', margin: 10, borderRadius: 10},
  inner_container: {padding: 10},
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  description: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 14,
  },
  author: {
    fontSize: 12,
    fontWeight: 'thin',
    fontStyle: 'italic',
    textAlign: 'right',
    color: 'red',
    marginBottom: 10,
  },
});
