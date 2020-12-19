import React, {useEffect, useState} from 'react';
import { Text, StyleSheet, View, FlatList} from 'react-native';
import ListTab from "../../atoms/ListTab/ListTab.js";

const PantryBoard = (props) => {
    const handleAction = (tab) => {
        props.setSelectedTab(tab.id);
    }

    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <FlatList
                    style={{width: "100%"}}
                    horizontal={true}
                    data={props.tabs}
                    extraData={props.tabs}
                    renderItem={({item}) => <ListTab tab={item} action={handleAction} selected={props.selected} />}
                    keyExtractor={(tab) => tab.id}
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
        marginBottom: 10,
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