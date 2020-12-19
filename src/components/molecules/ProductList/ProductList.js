import React, { useState } from 'react';
import {TouchableOpacity, View, Text, FlatList, StyleSheet} from 'react-native';

import Product from '../../atoms/Product/Product.js';

const ProductList = (props) => {
    const [selected, setSelected] = useState("");

    const handleAction = () => {
        console.log("test");
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={{width: "100%", height: '100%'}}
                data={props.displayData}
                extraData={props.data}
                renderItem={({item, index}) => <Product product={item} index={index} action={handleAction} selected={selected} />}
                keyExtractor={(product) => product.id}
                getItemLayout={(data, index) => (
                    {length: 80, offset: 80 * index, index}
                )}
                initialScrollIndex={0}
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
});

export default ProductList;