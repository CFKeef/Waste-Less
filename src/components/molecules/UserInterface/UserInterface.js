import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';

const UserInterface = (props) => {
    return (
        <View style={styles.container}>
           <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.touchable} onPress={() => console.log("TEST!")}>
                    <Text style={styles.touchableText}>Add Tab</Text>
                </TouchableOpacity>
           </View>

           <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.touchable} onPress={() => console.log("TEST!")}>
                    <Text style={styles.touchableText}>Add Product</Text>
                </TouchableOpacity>
           </View>
        </View>
    )
};

const styles=StyleSheet.create({
    container: {
        flexDirection: "row",
        alignSelf: "stretch",
        justifyContent: "space-between",
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20
    },
    btnContainer: {
        backgroundColor: "#cae1e7",
        borderRadius: 5,
        borderColor: "#e5e5e5",
        borderWidth: 1,
    },
    touchable: {
        paddingTop: 10,
        paddingBottom: 10,
        width: 120,
        alignItems: "center"
    },
    touchableText: {
        color: "#300070",
        fontWeight: "700",
        fontSize: 16
    }
});

export default UserInterface;