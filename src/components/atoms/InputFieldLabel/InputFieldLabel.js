import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

const InputFieldLabel = (props) => {
    return (
        <Text styles={styles}>{props.text}</Text>
    )
};

const styles = StyleSheet.create({

});

export default InputFieldLabel;