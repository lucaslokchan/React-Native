import React from 'react';
import { Platform, StyleSheet, Text, KeyboardAvoidingView} from 'react-native';

import SearchInput from './components/SearchInput';

export default class App extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <Text style={[styles.largeText, styles.textStyle]}>Hong Kong</Text>
                <Text style={[styles.smallText, styles.textStyle]}>Sunny</Text>
                <Text style={[styles.largeText, styles.textStyle]}>28°</Text>

                <SearchInput placeholder='Search any city'/>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
      textAlign: 'center',
      ...Platform.select({
        ios: {
          fontFamily: 'AvenirNext-Regular'
        },
        android: {
          fontFamily: 'Roboto'
        },
      }),
    },
    largeText: {
      fontSize: 44,
    },
    smallText: {
      fontSize: 18,
    },
    textInput:{
      backgroundColor: '#666',
      color: 'white',
      height: 40,
      width: 300,
      marginTop: 20,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      alignSelf: 'center',
    },
});

