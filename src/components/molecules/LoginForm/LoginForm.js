import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import InputField from '../../atoms/InputField/InputField.js';
import GenericButton from "../../atoms/Button/Button.js"

const LoginForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log(email + " " + password)
    }

    return (
        <View style={styles.container}>
            <InputField
                placeholder={"Email Address"}
                value={email}
                setValue={setEmail}
                secure={false}
            />
            <InputField
                placeholder={"Password"}
                value={password}
                setValue={setPassword}
                secure={true}
            />
            <GenericButton
                message={"Login"}
                action={handleLogin}
                backgroundColor={"#592CBA"}
                textColor={"#FFD5CE"}
                color={"#592CBA"}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }
});

export default LoginForm;