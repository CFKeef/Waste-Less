import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const GenericButton = (props) => {
    return (
        <TouchableOpacity onPress={() => console.log("press")}>
            <Text>{props.message}</Text>
        </TouchableOpacity>
    )
};

export default GenericButton;