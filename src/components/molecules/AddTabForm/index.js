import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { useSelector, useDispatch } from "react-redux";

// Actions
import { addTab } from "../../../../actions/tabs.js";

// Components
import InputFieldLabel from '../../atoms/InputFieldLabel/InputFieldLabel'
import InputField from '../../atoms/InputField/InputField';
import GenericButton from "../../atoms/Button/Button.js"
import Err from "../../atoms/Err";

// Data
const getTabs = state => state.tabs.tabs;

const AddTabForm = (props) => {
    const storeTabs = useSelector(getTabs);
    const dispatch = useDispatch();

    const [err, setErr] = useState(false);
    const [title, setTitle] = useState("");
    

    const addTabSubmit = () => {
        const validation = () => {
            switch(true) {
                case !title.length > 0 || title === "":
                default: 
                    return true;                
            }
        };
        const resetState = () => {
            setTitle("");
            setErr(false);
            props.setAddTabShown(false);
        }
        
        if(!validation()) {
            setErr(true);
        }
        else {
            const newTab = {
                id: "prod" + title + new Date().getTime(),
                title: title
            };

            resetState();
            dispatch(addTab(newTab))
        }
    }

    return (
        <KeyboardAwareScrollView style={styles.container}>
            <View style={styles.posContainer}>
                <View>
                <View>  
                    <InputFieldLabel
                        text={"Tab Name"}
                    />
                    <InputField
                        placeholder={"Tab Name"}
                        value={title}
                        setValue={setTitle}
                        secure={false}
                    />
                </View>
                </View>
                <View>
                    <GenericButton
                        message={"Add Tab"}
                        action={addTabSubmit}
                        backgroundColor={"#592CBA"}
                        textColor={"#FFD5CE"}
                        color={"#592CBA"}
                    />
                    {err ? <Err /> : null}
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        height: 450,
        top: 200,
        zIndex: 2,
        borderRadius: 5,
    },
    posContainer: {
        backgroundColor: "#FBF6F2",
        padding: 20,
        height: "100%",
        justifyContent: "space-between",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#300070"
    }
});

export default AddTabForm;