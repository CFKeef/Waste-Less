import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';

const Product = (props) => {
    const handleExpirationText = () => {
        let today = new Date();

        // If expires within 3 days do yellow text

        // If expired red text

        // Else green text

        return "Expired"
    };

    const handleItemImage = (category) => {
        switch (category) {
            case "Meat":
                return itemArr[0].imageLink
        }
    }

    const handleExpirationStyling = () => {

        return styles.expiredText
    };

    return (
        <TouchableOpacity key={props.product.title + props.product.index} style={styles.container}>
            <View style={styles.posContainer}>
                <View style={styles.cardContainer}>
                {console.log(props)}
                    <View style={[styles.textContainer, styles.leftContainer]}>
                        <Image 
                            style={styles.categoryImg}
                            source={require('./meat.png')}
                        />
                        <Text numberOfLines={1} style={[styles.otherText, styles.cardText, styles.leftText]}>{props.product.title}</Text>
                    </View>
                    <View style={[styles.textContainer, styles.leftContainer]}>
                        <Text numberOfLines={1} style={[handleExpirationStyling(), styles.cardText, styles.leftText]}>{handleExpirationText()}</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <View style={[styles.rightContainer, styles.textContainer]}>
                        <Text numberOfLines={1} style={[styles.otherText, styles.cardText, styles.rightText]}>Count: {props.product.quantity + " " + props.product.unit}</Text>
                    </View>
                    <View style={[styles.textContainer, styles.rightContainer]}>
                        <Text numberOfLines={1} style={[styles.otherText, styles.cardText, styles.rightText]}>{props.product.location}</Text>
                    </View>
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
        borderColor: "#e5e5e5",
        borderWidth: 1
    },
    posContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
        height: 80
    },
    cardContainer: {
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 10,
        width: "50%"
    }, 
    cardText: {
        width: "100%",
        fontSize: 14,
        fontWeight: "700",
    },
    textContainer: {
        flexDirection: "row"
    },
    leftText: {
        textAlign: "left",
    },
    rightText: {
        textAlign: "right"
    },
    rightContainer: {
        marginRight: 10
    },
    leftContainer: {
        marginLeft: 10
    },
    categoryImg: {
        height: 17,
        width: 24,
        marginRight: 10
    },
    otherText: {
        color: "#300070"
    },
    expiredText: {
        color: "#E276A0"
    }
})

export default Product;