import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView} from 'react-native';
import HyperLinkText from '../../components/atoms/HyperLinkText/HyperLinkText.js';
import LoginForm from '../../components/molecules/LoginForm/LoginForm.js';

const Login = ({ navigation }) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#FBF6F2",}}>
            <View
                style={styles.container}
            >   
                <Text style={styles.logo}>Waste Less</Text>
                <View style={styles.content}>
                    <View style={styles.headerText}>
                        <Text style={styles.title}>Login</Text>
                        <Text style={styles.subTitle}>Login to manage your pantry</Text>
                    </View>
                    <LoginForm 
                        navigation={navigation}
                    />
                    <View style={styles.hyperLinkTextContainer}>
                        <HyperLinkText
                            message={"Don't have an account? Create it"}
                            screen={"Register"}
                            linkMessage={"Here"}
                            navigation={navigation}
                        />
                    </View>
                    <View style={[styles.hyperLinkTextContainer, styles.extraSpace]}>
                        <HyperLinkText
                            message={"Forgot your information? Reset it"}
                            screen={"Recover"}
                            linkMessage={"Here"}
                            navigation={navigation}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "flex-start",
    },
    hyperLinkTextContainer: {
        alignSelf: "stretch",
        marginTop: 10,
    },
    headerText: {
        textAlign: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 28,
        color: "#300076",
        fontWeight: "700",
    },
    subTitle: {
        fontSize: 16,
        color: "#300076",
        marginTop: 10,
        marginBottom: 10
    },
    logo: {
        fontSize: 36,
        color: "#300076",
        fontWeight: "700"
    },
    content: {
        marginTop: 100
    },
    extraSpace: {
        marginTop: 20
    }
});

export default Login;

