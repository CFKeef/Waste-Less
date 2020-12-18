import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput } from 'react-native';

const Dashboard = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [target, setTarget] = useState("");

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#FBF6F2",}}>
            <View style={styles.container}>
                {/*  Top part of dashboard   */}
                <View style={styles.topContainer}>
                    {/*  Title Line  */}
                    <View style={styles.textContainer}>
                        <Text style={styles.headerText}>Pantry</Text>
                    </View>
                    <View style={styles.searchBarContainer}>
                        <TextInput
                            style={styles.inputField}
                            placeholder={"Seach your pantry"}
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
                <View>
                
                </View>
            </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "flex-start",
    },
    textContainer: {
        textAlign: "left",
        marginBottom: 10
    },
    headerText: {
        fontSize: 24,
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
    }
});

export default Dashboard;

