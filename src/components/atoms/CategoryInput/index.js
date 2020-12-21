import React, { useState } from 'react';
import {View, StyleSheet, Text, Image,TouchableOpacity } from 'react-native';

import InputFieldLabel from '../InputFieldLabel/InputFieldLabel.js';
import DropDownPicker from 'react-native-dropdown-picker';

const CategoryInput = (props) => {
    return(
        <View>
            <InputFieldLabel
                text={"Category"}
            />
            <DropDownPicker
                items={[
                    {label: 'Meat', value: 'meat'},
                    {label: 'Produce', value: 'produce'},
                    {label: 'Fruit', value: 'fruit'},
                    {label: 'Grain', value: 'grain'},
                    {label: 'Other', value: 'other'}
                ]}
                containerStyle={styles.containerStyle}
                style={styles.backgroundColor}
                itemStyle={styles.itemStyle}
                dropDownStyle={styles.backgroundColor}
                dropDownMaxHeight={80}
                defaultValue={props.category.value}
                placeholder="Select a category"
                placeholderStyle={styles.placeholderStyle}
                onChangeItem={item => props.setCategory(item)}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    placeholderStyle:{
        textAlign: 'left',
        color: "#300070",
    },
    backgroundColor: {
        backgroundColor: "#E2E6FF"
    },
    itemStyle: {
        justifyContent: 'flex-start',
        zIndex: 3
    },
    containerStyle: {
        height: 40, 
        backgroundColor: "#E2E6FF", 
        zIndex: 3
    }
})

export default CategoryInput;