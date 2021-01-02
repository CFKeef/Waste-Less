import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import InputField from '../../atoms/InputField/InputField.js';
import InputFieldLabel from '../../atoms/InputFieldLabel/InputFieldLabel.js';
import {useDispatch} from 'react-redux';
import GenericButton from "../../atoms/Button/Button.js";
import axios from 'axios';

import {setAccount} from '../../../../actions/accounts';

const LoginForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const dispach = useDispatch();

    const validation = () => {
        switch(true) {
            case email.length === 0:
            case password.length === 0:
                setError(true);
                break;
            default:
                setError(false);
                handleLogin();
                break;
        }
    }

    const handleLogin = () => {
        axios.post("http://192.168.1.194:19005/login", {
            email: email,
            pw: password
        })
        .then(res =>{
            if(res.status === 200) {
                props.navigation.navigate("Dashboard");
                dispach(setAccount(res.data));
                resetState()
            }
            else {
                setError(true);
            }
        })
        .catch(err => {
            setError(true);
        });
    }

    const handleWrongLogin = () => {
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
                <GenericButton
                    message={"Login"}
                    action={validation}
                    backgroundColor={"#592CBA"}
                    textColor={"#FFD5CE"}
                    color={"#592CBA"}
                />
            </View>
            {handleWrongLogin()}
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

export default LoginForm;