import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import InputField from '../../atoms/InputField/InputField.js';
import InputFieldLabel from '../../atoms/InputFieldLabel/InputFieldLabel.js';
import GenericButton from "../../atoms/Button/Button.js"

const RecoverForm = (props) => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);

    const handleRecovery = () => {
        console.log(email)
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
                <GenericButton
                    message={"Recover"}
                    action={handleRecovery}
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

export default RecoverForm;