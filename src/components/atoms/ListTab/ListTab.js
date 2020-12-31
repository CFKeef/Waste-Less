import React from 'react';

import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const ListTab = (props) => {

    // Determines if the tab is the current active one and changes the container styling
    const handleContainerStyling = () => {
        return props.tab.id === props.selected ? [styles.container, styles.active] : [styles.container, styles.inactive]
    }

    // Determines if the tab is the current active one and changes the text styling
    const handleTextStyling = () => {
        return props.tab.id === props.selected ? [styles.text, styles.activeText] : [styles.text, styles.inactiveText]
    }

    return (
        <TouchableOpacity style={handleContainerStyling()} onPress={() => {}}>
                <Text numberOfLines={1} style={handleTextStyling()}>{props.tab.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        height: 40,
        width: 80,
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    active: {
        backgroundColor: "#300760",
    },
    text: {
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 1
    },
    activeText: {
        color: "#FFD5CE",
    },
    inactiveText: {
        color: "#AAAAAA"
    }
});

export default ListTab;