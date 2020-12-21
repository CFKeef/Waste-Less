import React, { useState } from 'react';
import {TouchableOpacity, View, Text, FlatList, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from "react-redux";

import Product from '../../atoms/Product/Product.js';
const getProducts = state => state.products.products;

const ProductList = (props) => {
    const [selected, setSelected] = useState("");
    const storeProducts = useSelector(getProducts);
    const dispatch = useDispatch();

    const handleAction = () => {
        console.log("test");
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={{width: "100%", height: '100%'}}
                data={storeProducts}
                extraData={storeProducts}
                renderItem={({item, index}) => <Product product={item} index={index} action={handleAction} selected={selected} />}
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