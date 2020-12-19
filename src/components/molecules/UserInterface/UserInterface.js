import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';

const UserInterface = (props) => {
    return (
        <View style={styles.container}>
           <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.touchable}>
                    <Text style={styles.touchableText}>Menu</Text>
                </TouchableOpacity>
           </View>
           <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.touchable}>
                    <Text style={styles.touchableText}>Alerts</Text>
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
        backgroundColor: "#300070"
    },
    touchable: {
        padding: 15,
    },
    touchableText: {
        color: "#FFD5CE",
        fontWeight: "700",
        fontSize: 16
    }
});

export default UserInterface;