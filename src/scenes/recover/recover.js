import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView} from 'react-native';
import HyperLinkText from '../../components/atoms/HyperLinkText/HyperLinkText.js';
import RecoverForm from '../../components/molecules/RecoverForm/RecoverForm.js'

const Recover = ({ navigation }) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#FBF6F2",}}>
            <View
                style={styles.container}
            >   
                <Text style={styles.logo}>Waste Less</Text>
                <View style={styles.content}>
                    <View style={styles.headerText}>
                        <Text style={styles.title}>Recover</Text>
                        <Text style={styles.subTitle}>Enter your email below!</Text>
                    </View>
                    <RecoverForm />
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
}

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
        marginTop: 80
    },
    extraSpace: {
        marginTop: 20
    }
});
export default Recover;