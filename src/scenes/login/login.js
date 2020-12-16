import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Login = ({ navigation }) => {
    return (
        <View
            style={styles.container}
        >
            <Text> 
                Don't have an account? <Text onPress={() => navigation.navigate("Register")}>Register now!</Text>
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FBF6F2",
        flex:1
    }
});

export default Login;

