import React, { useState } from 'react';
import {TouchableOpacity, View, Text, FlatList, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from "react-redux";

import Product from '../../atoms/Product/Product.js';
const getProducts = state => state.products.products;
const getIsStoreListDisplayed = state => state.flags.isStoreListDisplayed;
const getSelectedProductList = state => state.selects.productList;
const getSelectedProduct = state => state.selects.product;

const ProductList = (props) => {
    const storeProducts = useSelector(getProducts);
    const storeProductFlag = useSelector(getIsStoreListDisplayed);
    const storeSelectedProductList = useSelector(getSelectedProductList);
    const storeSelectedProduct = useSelector(getSelectedProduct);
    const dispatch = useDispatch();

    const handleDataSwap = () => {
        return storeProductFlag ? storeProducts : storeSelectedProductList
    };

    return (
        <View style={styles.container}>
            <FlatList
                style={{width: "100%", height: '100%'}}
                data={handleDataSwap()}
                renderItem={({item, index}) => <Product product={item} index={index} selected={storeSelectedProduct} />}
                keyExtractor={(product) => product.id}
                getItemLayout={(data, index) => (
                    {length: 80, offset: 80 * index, index}
                )}
                initialScrollIndex={0}
                ListEmptyComponent={
                    <View style={styles.posContainer}>
                        <Text style={styles.emptyList}>Add something to your pantry!</Text>
                    </View>
                }
             />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch",
        alignItems: "center", 
        justifyContent: "center",
        marginLeft: 20,
        marginRight: 20,
        height: 550
    },
    posContainer: {
        alignSelf: "stretch",
        alignItems: "center", 
        justifyContent: "center",
    },  
    emptyList: {
        marginTop: 250,
        fontSize: 20,
        marginLeft: 20,
        marginRight: 20,
        color: "#AAAAAA"
    }
});

export default ProductList;