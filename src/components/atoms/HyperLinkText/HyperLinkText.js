import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HyperLinkText = (props) => {
    return (
        <Text style={{color: props.color, fontSize: props.size}}> 
            {props.message} <Text style={styles.underline} onPress={() => props.navigation.navigate(props.screen)}>{props.linkMessage}</Text>
        </Text>
    )
} 

const styles = StyleSheet.create({
    underline:{
        textDecorationLine: 'underline'
    }
});

export default HyperLinkText;