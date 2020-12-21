import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { useSelector, useDispatch } from "react-redux";

// Actions
import { addProduct } from "../../../../actions/products.js";
import { addTab } from "../../../../actions/tabs.js";

// Components
import InputFieldLabel from '../../atoms/InputFieldLabel/InputFieldLabel'
import InputField from '../../atoms/InputField/InputField';
import GenericButton from "../../atoms/Button/Button.js"
import CategoryInput from "../../atoms/CategoryInput";
import Err from "../../atoms/Err";

// Data
const getProducts = state => state.products.products;
const getTabs = state => state.tabs.tabs;


const AddProductForm = (props) => {
    const storeProducts = useSelector(getProducts);
    const storeTabs = useSelector(getTabs);
    const dispatch = useDispatch();
    const [err, setErr] = useState(false);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [unit, setUnit] = useState("");

    const addProductSubmit = () => {
        const validation = () => {
            switch(true) {
                case !title.length > 0 || title === "":
                case category === null || category === "":
                case !location.length > 0 || location === "":
                case expirationDate === "Invalid Date" || expirationDate === "":
                    return false;
                default: 
                    return true;                
            }
        };
        const resetState = () => {
            setTitle("");
            setCategory("");
            setLocation("");
            setExpirationDate("");
            setQuantity("1");
            setUnit("");
            setErr(false);
            props.setAddProductShown(false);
        }
        
        if(!validation()) {
            setErr(true);
        }
        else {
            const newProduct = {
                id: "prod" + title + new Date().getTime(),
                title: title,
                category: category,
                location: location,
                expirationDate: new Date(expirationDate).toLocaleDateString("en-us"),
                quantity: quantity.split(" ")[0],
                unit: quantity.split(" ")[1] === undefined ? "" : quantity.split(" ")[1]
            };

            // Create the location if its not already made
            if(storeTabs.filter(x => x.title === newProduct.title).length === 0) {
                dispatch(addTab({id: Math.random().toString(36).substr(2, 9), title: newProduct.location}));
            }

            resetState();
            dispatch(addProduct(newProduct))
        }
    };

    return (
        <View style={styles.formContainer}>
            <View style={styles.posContainer}>
                {err ? <Err /> : null}
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
                    <View>  
                        <InputFieldLabel
                            text={"Where is it stored?"}
                        />
                        <InputField
                            placeholder={"Location"}
                            value={location}
                            setValue={setLocation}
                            secure={false}
                        />
                    </View>
                    <View>  
                        <InputFieldLabel
                            text={"When does it expire?"}
                        />
                        <InputField
                            placeholder={"Enter in MM/DD/YYYY"}
                            value={expirationDate}
                            setValue={setExpirationDate}
                            secure={false}
                        />
                    </View>
                    <View>  
                        <InputFieldLabel
                            text={"How much do you have?"}
                        />
                        <InputField
                            placeholder={"Enter Quantity and unit seperated by a space"}
                            value={quantity}
                            setValue={setQuantity}
                            secure={false}
                        />
                    </View>
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