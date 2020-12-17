import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const GenericButton = (props) => {
    return (
        <TouchableOpacity onPress={() => props.action()}
            style={{
                backgroundColor: props.color,
                width: 300,
                height: 40,
                justifyContent:"center",
                alignContent:"center"
            }}
        >
            <Text 
                style={{
                    color: props.textColor, 
                    textAlign: "center", 
                    fontSize: 18,
                }}
            >
            {props.message}</Text>
        </TouchableOpacity>
    )
};

export default GenericButton;