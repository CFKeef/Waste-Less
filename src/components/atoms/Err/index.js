import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Err = (props) => {
    return (
        <View style={styles.errContainer}>
            <Text style={styles.errText}>Error: Check your inputs!</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    errContainer: {
        position: "absolute",
        backgroundColor: "#F06775",
        width: 300,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        top: 50,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        zIndex: 3
    },
    errText: {
        color: "white",
        fontSize: 16
    }
});

export default Err;