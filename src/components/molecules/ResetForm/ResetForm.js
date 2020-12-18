import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import InputField from '../../atoms/InputField/InputField.js';
import InputFieldLabel from '../../atoms/InputFieldLabel/InputFieldLabel.js';
import GenericButton from "../../atoms/Button/Button.js"

const ResetForm = (props) => {
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [error, setError] = useState(false);

    const validation = () => {
        switch(true) {
            case password.length === 0:
            case confirmedPassword.length === 0:
            case password !== confirmedPassword:
                setError(true);
                break;
            default:
                setError(false);
                handleReset();
                break;
        }
    }

    const handleReset = () => {
        props.navigation.navigate("Login");
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
                    <InputFieldLabel text="New Password"/>
                </View>
                <InputField
                    placeholder={"New Password"}
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
            <View style={styles.space}>
                <GenericButton
                    message={"Reset Password"}
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
    }
});

export default ResetForm;