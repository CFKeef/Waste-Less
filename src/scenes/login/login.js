import React from 'react';
import { View, StyleSheet} from 'react-native';
import GenericButton from '../../components/atoms/Button/Button.js';
import HyperLinkText from '../../components/atoms/HyperLinkText/HyperLinkText.js';

const Login = ({ navigation }) => {
    return (
        <View
            style={styles.container}
        >       
            <GenericButton
                message={"Login"}
            />
            <HyperLinkText
                message={"Don't have an account?"}
                screen={"Register"}
                linkMessage={"Register Now!"}
                navigation={navigation}
                color={"#E276A0"}
                size={16}
            />
            <HyperLinkText
                message={""}
                screen={"Recover"}
                linkMessage={"Forgot your password?"}
                navigation={navigation}
                color={"#BCBCBC"}
                size={14}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FBF6F2",
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Login;

