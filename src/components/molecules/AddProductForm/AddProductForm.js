import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from "react-redux";


import InputFieldLabel from '../../atoms/InputFieldLabel/InputFieldLabel'
import InputField from '../../atoms/InputField/InputField';
import GenericButton from "../../atoms/Button/Button.js"
import CategoryInput from "../../atoms/CategoryInput";

const getProducts = state => state.products.products;


const AddProductForm = () => {
    const storeProducts = useSelector(getProducts);
    const dispatch = useDispatch();

    const [id, setID] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");

    const addProductSubmit = (product) => dispatch(addProduct(product));
    return (
        <View style={styles.formContainer}>
            <View style={styles.posContainer}>
                <View style={styles.inputsContainer}>
                    <View>  
                        <InputFieldLabel
                            text={"Product Name"}
                        />
                        <InputField
                            placeholder={"Product Name"}
                            value={title}
                            setValue={setTitle}
                            secure={false}
                        />
                    </View>
                    <CategoryInput
                        category={category}
                        setCategory={setCategory}
                    />
                </View>
                <View>
                    <GenericButton
                        message={"Add Product"}
                        action={addProductSubmit}
                        backgroundColor={"#592CBA"}
                        textColor={"#FFD5CE"}
                        color={"#592CBA"}
                    />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    formContainer: {
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
    },
    inputsContainer: {
        justifyContent: "space-evenly",
        height: "90%"
    }
});

export default AddProductForm;