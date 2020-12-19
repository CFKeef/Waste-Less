import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const Product = (props) => {
    const handleExpirationText = () => {
        let today = new Date();

        // If expires within 3 days do yellow text

        // If expired red text

        // Else green text

        return props.expirationDate
    };
    return (
        <TouchableOpacity key={props.product.title + props.product.index} style={styles.container}>
            <View style={styles.cardContainer}>
                <View>
                    <Text>{props.product.title}</Text>
                </View>
                <View>
                    <Text>{handleExpirationText()}</Text>
                </View>
            </View>
            <View>
                <View>
                    <Text>Count: {props.product.quantity + " " + props.product.unit}</Text>
                </View>
                <View>
                    <Text>{props.product.location}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        width: "100%",
    },
    cardContainer: {
        flexDirection: "row"
    }
})

export default Product;