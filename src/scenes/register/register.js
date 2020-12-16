import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Register = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.logoHeader}>Waste Less</Text>
            <Text> 
                Already have an account? 
                <Text onPress={() => navigation.navigate("Login")}> Login here!</Text>
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FBF6F2",
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoHeader: {
        fontSize: 30
    }
});

export default Register;

