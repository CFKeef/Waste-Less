import React, { useState, useCallback } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from "react-redux";

import {selectTab, selectProductList} from '../../../actions/selects';
import {setDisplayStoreList} from '../../../actions/flags';


import PantryBoard from '../../components/molecules/PantryBoard/PantryBoard.js';
import ProductList from '../../components/molecules/ProductList/ProductList.js';
import UserInterface from '../../components/molecules/UserInterface/UserInterface.js';
import AddProductForm from '../../components/molecules/AddProductForm/AddProductForm.js';
import AddTabForm from '../../components/molecules/AddTabForm';

// Pull from
const getProducts = state => state.products.products;
const getTabs = state => state.tabs;
const getIsStoreListDisplayed = state => state.flags.isStoreListDisplayed;

const Dashboard = ({navigation}) => {
    // Call our data set
    const storeProducts = useSelector(getProducts);
    const storeTabs = useSelector(getTabs);
    const storeProductFlag= useSelector(getIsStoreListDisplayed);
    const dispatch = useDispatch();
    
    const [addProductShown, setAddProductShown] = useState(false);     
    const [addTabShown, setAddTabShown] = useState(false);
    const [target, setTarget] = useState("");

    const handleTabClick = (tab) => {
        const handleProducts = () =>{
            if(tab.location !== "All") {
                dispatch(setDisplayStoreList(false));
                return storeProducts.filter(x => x.tabid === tab.id);
            }
            else {
                dispatch(setDisplayStoreList(true));
                return storeProducts;
            }
        }
        dispatch(selectTab(tab));
        dispatch(selectProductList(handleProducts()))
    };

    const handleProductClick = (product) => {
        dispatch(selectProduct(product));
    };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#FBF6F2",}}>
            <View style={styles.container}>
                {/*  Top part of dashboard   */}
                <View style={styles.topContainer}>
                    {/*  Title Line  */}
                    <View style={styles.textContainer}>
                        <Text style={styles.headerText}>Pantry</Text>
                        <TouchableOpacity>
                            <Image 
                                style={styles.burgerImage}
                                source={require('../../../assets/images/menu.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.searchBarContainer}>
                        <TextInput
                            style={styles.inputField}
                            placeholder={"Search your pantry"}
                            placeholderTextColor="#300076"
                            onChangeText={text => setTarget(text)}
                            value={target}
                        />
                        <Image
                            style={styles.searchImage}
                            source={require('../../../assets/images/search.png')}
                        />
                    </View>
                </View>
                {/*  List portion of dashboard   */}
                <PantryBoard 
                    handleTabClick={handleTabClick}
                />
                {addProductShown ? <AddProductForm 
                                    setAddProductShown={setAddProductShown} 
                                    navigation={navigation}/> : null}
                {addTabShown ? <AddTabForm setAddTabShown={setAddTabShown} /> : null}
                <ProductList 
                    handleProductClick={handleProductClick}
                />
                <UserInterface
                    navigation={navigation}
                    addProductShown={addProductShown}
                    setAddProductShown={setAddProductShown}
                    addTabShown={addTabShown}
                    setAddTabShown={setAddTabShown}
                />
            </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100%",
        width: "100%"
    },
    textContainer: {
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    headerText: {
        fontSize: 24,
        color: "#300070",
        fontWeight: "700",
    },
    dateText: {
        fontSize: 22,
        color: "#300076",
        fontWeight: "700",
    },
    searchImage: {
        height: 20,
        width: 20,
        position: "absolute",
        top: 10,
        left: 10
    },
    inputField: {
        backgroundColor: "#E2E6FF",
        color: "#300076",
        width: 300,
        height: 40,
        paddingLeft: 40,
    },
    searchBarContainer: {
        borderColor: "#e5e5e5",
        borderWidth: 1
    },
    burgerImage: {
        height: 20,
        width: 20
    }
});

export default Dashboard;

