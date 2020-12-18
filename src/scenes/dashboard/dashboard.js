import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const Dashboard = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#FBF6F2",}}>
            <View style={styles.container}>
                <View>
                    <View>
                        <Text>Pantry</Text>
                    </View>
                    
                </View>
            </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "flex-start",
    }
});

export default Dashboard;

