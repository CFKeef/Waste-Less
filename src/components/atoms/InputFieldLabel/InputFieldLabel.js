import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const InputFieldLabel = (props) => {
    return ( 
            <Text style={styles.label}>{props.text}</Text>
    )
};

const styles = StyleSheet.create({
    label: {
        alignSelf: "flex-start",
        color: "#300076",
        fontWeight: "700",
    }
});

export default InputFieldLabel;