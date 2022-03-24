import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.red}>Hello</Text>
                <Text style={styles.blue}>123123123</Text>
            </View>
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

    red: {
      color: 'red',
    },
    
    blue: {
      color: 'blue'
    }
});

