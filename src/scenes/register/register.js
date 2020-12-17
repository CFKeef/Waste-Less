import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import SignupForm from '../../components/molecules/SignupForm/SignupForm.js'
import HyperLinkText from '../../components/atoms/HyperLinkText/HyperLinkText.js';

const Register = ({ navigation }) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#FBF6F2",}}>
            <View
                style={styles.container}
            >   
                <Text style={styles.logo}>Waste Less</Text>
                <View style={styles.content}>
                    <View style={styles.headerText}>
                        <Text style={styles.title}>Signup</Text>
                        <Text style={styles.subTitle}>Start managing your pantry the right way!</Text>
                    </View>
                    <SignupForm />
                    <View style={styles.hyperLinkTextContainer}>
                        <HyperLinkText
                            message={"Already have an account? Sign in"}
                            screen={"Login"}
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
        marginBottom: 10,
        flexWrap: "wrap"
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
export default Register;

