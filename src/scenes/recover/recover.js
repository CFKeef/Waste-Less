import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Recover = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Hi from recover</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FBF6F2",
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Recover;