import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import { useSelector, useDispatch } from "react-redux";

import InputFieldLabel from '../../atoms/InputFieldLabel/InputFieldLabel'
import InputField from '../../atoms/InputField/InputField';
import GenericButton from "../../atoms/Button/Button.js"

import { addTab } from "../../../../actions/tabs";

const getProducts = state => state.products.products;
const getTabs = state => state.tabs.tabs;

const UserInterface = (props) => {
    const storeProducts = useSelector(getProducts);
    const storeTabs = useSelector(getTabs);
    const dispatch = useDispatch();

    const [form, setForm] = useState("");

    const [addShown, setAddShown] = useState(false);        
    const testSubmit = () => dispatch(addTab({id: form, title: form}))
    const test = () => {
        if(addShown) 
            return (
                <View>
                    <InputFieldLabel
                        text={"Test"}
                    />
                    <InputField
                        placeholder={"TEST"}
                        value={form}
                        setValue={setForm}
                        secure={false}
                    />
                    <GenericButton
                        message={"Add Tab"}
                        action={testSubmit}
                        backgroundColor={"#592CBA"}
                        textColor={"#FFD5CE"}
                        color={"#592CBA"}
                    />
                </View>
            )
    };

    return (
        <View style={styles.container}>
           <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.touchable} onPress={() => console.log("TEST!")}>
                    <Text style={styles.touchableText}>Add Tab</Text>
                </TouchableOpacity>
           </View>  
           {test()}
           <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.touchable} onPress={() => setAddShown(!addShown)}>
                    <Text style={styles.touchableText}>{addShown ? "Cancel" : "Add Product"}</Text>
                </TouchableOpacity>
           </View>
        </View>
    )
};

const styles=StyleSheet.create({
    container: {
        flexDirection: "row",
        alignSelf: "stretch",
        justifyContent: "space-between",
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20
    },
    btnContainer: {
        backgroundColor: "#cae1e7",
        borderRadius: 5,
        borderColor: "#e5e5e5",
        borderWidth: 1,
    },
    touchable: {
        paddingTop: 10,
        paddingBottom: 10,
        width: 120,
        alignItems: "center"
    },
    touchableText: {
        color: "#300070",
        fontWeight: "700",
        fontSize: 16
    }
});

export default UserInterface;