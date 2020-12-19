import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput} from 'react-native';
import PantryBoard from '../../components/molecules/PantryBoard/PantryBoard';

const Dashboard = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [tabs, setTabs] = useState([
        {id: "tab0", title: "All"},
        {id: "tab1", title: "All2"},
    ]);
    const [selectedTab, setSelectedTab] = useState("tab0");
    const [target, setTarget] = useState("");

    // Returns a date in the form Month DD, YYYY
    const handleDateString = () => {
        return new Date().toLocaleDateString({},
            {timeZone:"UTC",month:"long", day:"2-digit"}
            )
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#FBF6F2",}}>
            <View style={styles.container}>
                {/*  Top part of dashboard   */}
                <View style={styles.topContainer}>
                    {/*  Title Line  */}
                    <View style={styles.textContainer}>
                        <Text style={styles.headerText}>Pantry</Text>
                        <Text style={styles.dateText}>{handleDateString()}</Text>
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
                <PantryBoard 
                    tabs={tabs}
                    selected={selectedTab}
                    setSelectedTab={setSelectedTab}
                    data={masterData}
                />
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
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    headerText: {
        fontSize: 24,
        color: "#300076",
        fontWeight: "700",
    },
    dateText: {
        fontSize: 22,
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

