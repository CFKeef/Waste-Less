import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

const InputField = (props) => {
    return (
        <TextInput
            style={styles.inputField}
            placeholder={props.placeholder}
            placeholderTextColor="#300070"
            onChangeText={text => props.setValue(text)}
            value={props.value}
            secureTextEntry={props.secure ? props.secure : false}
        />
    )
};

const styles = StyleSheet.create({
    inputField: {
        backgroundColor: "#E2E6FF",
        color: "#300070",
        width: 300,
        height: 40,
        paddingLeft: 10,
    }
});

export default InputField;