import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

const InputField = (props) => {
    const [value, setValue] = useState("");

    return (
        <TextInput
            style={styles.inputField}
            placeholder={props.placeholder}
            placeholderTextColor="#AF95E8"
            onChangeText={text => setValue(text)}
            value={value}
        />
    )
};

const styles = StyleSheet.create({
    inputField: {
        backgroundColor: "#E2E6FF",
        color: "#AF95E8",
        width: 250,
        height: 41,
        paddingLeft: 10
    }
});

export default InputField;