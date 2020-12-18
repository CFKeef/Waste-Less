import React, { useState } from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';
import InputField from '../../atoms/InputField/InputField.js';
import InputFieldLabel from '../../atoms/InputFieldLabel/InputFieldLabel.js';
import GenericButton from "../../atoms/Button/Button.js"

const SignupForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [termsCheck, setTermsCheck] = useState(false);
    const [newsLetterCheck, setNewsLetterCheck] = useState(false);
    const [error, setError] = useState(false);

    const validation = () => {
        switch(true) {
            case !termsCheck:
            case email.length === 0:
            case password.length === 0:
            case confirmedPassword.length === 0:
                setError(true);
                break;
            default:
                setError(false);
                handleSignup();
                break;
        }
    }

    const handleSignup = () => {
        props.navigation.navigate("LinkSent");
    }

    const handleWrongInputs = () => {
        if(error) return (
            <View style={styles.error}>
                <Text style={styles.errorText}>Something went wrong!</Text>
                <Text style={styles.errorText}>Double check your information</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.space}>
                <View style={styles.labelSpace}>
                    <InputFieldLabel text="Email Address"/>
                </View>
                <InputField
                    placeholder={"Email Address"}
                    value={email}
                    setValue={setEmail}
                    secure={false}
                />
            </View>
            <View style={styles.space}>
                <View style={styles.labelSpace}>
                    <InputFieldLabel text="Password"/>
                </View>
                <InputField
                    placeholder={"Password"}
                    value={password}
                    setValue={setPassword}
                    secure={true}
                />
            </View>
            <View style={styles.space}>
                <View style={styles.labelSpace}>
                    <InputFieldLabel text="Confirm Password"/>
                </View>
                <InputField
                    placeholder={"Confirm Password"}
                    value={confirmedPassword}
                    setValue={setConfirmedPassword}
                    secure={true}
                />
            </View>
            <View style={styles.checksContainer}>
                <View style={styles.checks}>
                    <View style={styles.checkbox}>
                        <Switch trackColor={{true: "#592CBA", false: "grey"}} value={termsCheck} onValueChange={() => setTermsCheck(!termsCheck)} />
                    </View>
                    <View style={styles.text}>
                        <Text>{`I have read and agree to the Terms of Services & Privacy Policy`}</Text>
                    </View>
                </View>
                <View style={styles.checks}>
                    <View style={styles.checkbox}>
                        <Switch trackColor={{true: "#592CBA", false: "grey"}} value={newsLetterCheck} onValueChange={() => setNewsLetterCheck(!newsLetterCheck)} />
                    </View>
                    <View style={styles.text}>
                        <Text>{`Sign up for our newsletter`}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.space}>
                <GenericButton
                    message={"Signup"}
                    action={validation}
                    backgroundColor={"#592CBA"}
                    textColor={"#FFD5CE"}
                    color={"#592CBA"}
                />
            </View>
            {handleWrongInputs()}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10
    },
    error: {
        backgroundColor: "#fb6767",
        alignSelf: "stretch",
        marginTop: 20,
        paddingTop:10,
        paddingBottom: 10
    },
    errorText: {
        fontSize: 14,
        color: "white",
        fontWeight: "600",
        textAlign: "center"
    },
    space: {
        marginTop: 20,
    },
    labelSpace: {
        marginBottom: 5
    },
    checksContainer: {
    },
    checks: {
        flexDirection: "row",
        width: 300,
        marginTop: 20
    },
    checkbox: {
        
    },
    text: {
        marginLeft: 10,
        width: "75%"
    }

});

export default SignupForm;