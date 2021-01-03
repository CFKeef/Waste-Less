import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import { useSelector, useDispatch } from "react-redux";

import {selectProduct} from '../../../../actions/selects';

import Meat from './meat.png';
import Fruit from './fruits.png';
import Grain from './grain.png';
import Vegetable from './vegetable.png';
import Other from './other.png';

const getSelectedProduct = state => state.selects.product;
const getTabs = state => state.tabs.tabs;

const Product = (props) => {
    const storeTabs = useSelector(getTabs);
    const storeSelectedProduct = useSelector(getSelectedProduct);
    const dispatch = useDispatch();
    
    const handleSelectionCheck = (product) => {
        if (product.id === storeSelectedProduct.id) {
            return (
                <View style={styles.controlsContainer}>
                    <TouchableOpacity onPress={() => {}}>
                        <Text>Add To Shopping</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}}>
                        <Text>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}}>
                        <Text>Delete</Text>
                    </TouchableOpacity>
                </View>
            )
        } 
    }

    const handleClick = (product) => {
        if (product.id === storeSelectedProduct.id) dispatch(selectProduct({}));
        else dispatch(selectProduct(product));
    }

    const handleExpirationText = () => {
        let expDate = new Date(props.product.expirationdate);
        let timeDiff = expDate.getTime() - new Date().getTime();
        let daysSince = Math.ceil(timeDiff / (1000 * 3600 * 24));

        if(daysSince <= 3 && daysSince >= 1) return "Expires in " + daysSince + " day";
        else if(daysSince > 3) return "Good until " + expDate.toLocaleDateString("en-us");
        else if(daysSince === 0) return "Expires Today";
        else {
            return "Expired " + Math.abs(daysSince) + " days ago";
        }
    };

    const handleItemImageStyling = (category) => {
        switch (category) {
            case "meat":
                return styles.meatImg;
            default:
                return styles.sameSizeImg;
        }
    }

    const handleItemImage = (category) => {
        switch (category) {
            case "meat":
                return Meat;
            case "produce":
                return Vegetable;
            case "fruit":
                return Fruit;
            case "grain":
                return Grain;
            default:
                return Other;
        }
    }

    const handleExpirationStyling = () => {
        let timeDiff = new Date(props.product.expirationdate).getTime() - new Date().getTime();
        let daysSince = Math.ceil(timeDiff / (1000 * 3600 * 24));

        if(daysSince <= 3 && daysSince >= 1) return styles.warningText;
        else if(daysSince > 3) return styles.goodText;
        else {
            return styles.expiredText;
        }
    };

    const handleUnitText = () => {
        return props.product.unit === "NONE" ? "Unit" : props.product.unit;
    }

    const handleLocation = () => {
        if(storeTabs.filter(x => x.id === props.product.tabid).length > 0) return storeTabs.filter(x => x.id === props.product.tabid)[0].location;
        else return "";
    };

    return (
        <TouchableOpacity key={props.product.title + props.product.index} style={styles.container} onPress={() => {handleClick(props.product)}}>
            <View style={styles.posContainer}>
                <View style={styles.cardContainer}>
                    <View style={[styles.textContainer, styles.leftContainer]}>
                        <Image 
                            style={[handleItemImageStyling(props.product.category),styles.categoryImg]}
                            source={handleItemImage(props.product.category)}
                        />
                        <Text numberOfLines={1} style={[styles.otherText, styles.cardText, styles.leftText]}>{props.product.title}</Text>
                    </View>
                    <View style={[styles.textContainer, styles.leftContainer]}>
                        <Text numberOfLines={1} style={[handleExpirationStyling(), styles.cardText, styles.leftText]}>{handleExpirationText()}</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <View style={[styles.rightContainer, styles.textContainer]}>
                        <Text numberOfLines={1} style={[styles.otherText, styles.cardText, styles.rightText]}>Count: {props.product.quantity + " " + handleUnitText()}</Text>
                    </View>
                    <View style={[styles.textContainer, styles.rightContainer]}>
                        <Text numberOfLines={1} style={[styles.otherText, styles.cardText, styles.rightText]}>{handleLocation()}</Text>
                    </View>
                </View>
            </View>
            {handleSelectionCheck(props.product)}
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
        marginRight: 10
    },
    otherText: {
        color: "#300070"
    },
    goodText: {
        color: "#75F067"
    },
    warningText: {
        color: "#6775f0"
    },
    expiredText: {
        color: "#F06775"
    },
    meatImg: {
        height: 17,
        width: 24,
    },
    sameSizeImg: {
        height: 17,
        width: 17,
    },
    controlsContainer: {
        position:"absolute",
        flexDirection: "row",
        width: "100%",
        bottom: 0
    }
})

export default Product;