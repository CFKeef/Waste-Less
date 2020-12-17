import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const HyperLinkText = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> 
                {props.message} <Text style={styles.highlight} onPress={() => props.navigation.navigate(props.screen)}>{props.linkMessage}</Text>
            </Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#cae1e7",
        paddingTop:10,
        paddingBottom: 10
    },
    text: {
        color: "#592cba",
        paddingLeft: 10,
    },
    highlight: {
        fontWeight: "700"
    }
});

export default HyperLinkText;