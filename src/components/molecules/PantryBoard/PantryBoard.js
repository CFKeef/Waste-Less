import React, {useEffect, useState} from 'react';
import { Text, StyleSheet, View, FlatList} from 'react-native';
import { useSelector, useDispatch } from "react-redux";

import ListTab from "../../atoms/ListTab/ListTab.js";

const getTabs = state => state.tabs;
const getSelectedTab = state => state.selects.tab;

const PantryBoard = (props) => {
    const storeTabs = Object.values(useSelector(getTabs));
    const storeSelectedTab = useSelector(getSelectedTab);
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <FlatList
                    style={{width: "100%"}}
                    horizontal={true}
                    data={storeTabs}
                    renderItem={({item}) => <ListTab tab={item} selected={storeSelectedTab} action={props.handleTabClick} />}
                    keyExtractor={item => item.id}
                    removeClippedSubviews={false}
                />
                <View style={styles.line} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignSelf: "stretch",
    },
    tabContainer: {
        marginLeft: 20,
        marginRight: 20,
    },
    line: {
        borderTopColor: "#300760",
        borderTopWidth: 6,
    }
});

export default PantryBoard;