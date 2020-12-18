import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const LinkSent = ({ navigation }) => {
    const handleRedirect = () => {
        setTimeout(() => {
            navigation.navigate("Login");
        }, 3000)
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#FBF6F2",}}>
            <View style={styles.container}>
                <Text style={styles.logo}>Waste Less</Text>
                <View style={styles.headerText}>
                    <Text style={styles.title}>Sent!</Text>
                    <Text style={styles.subTitle}>Check your email for the next step</Text>
                </View>
            </View>
            {handleRedirect()}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "flex-start",
    },
    headerText: {
        textAlign: "center",
        alignItems: "center",
        marginTop: 160
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
});

export default LinkSent