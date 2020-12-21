import React, { useState, useEffect }  from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const BarcodeScanner = (props) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        console.log(type);
        console.log(data)
    };
    
    useEffect(() => {
        const setUpScanner = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        }
        setUpScanner();
      }, []);

    if (hasPermission === null) {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: "#FBF6F2",}}>
                <Text>Requesting for camera permission</Text>;
            </SafeAreaView>
        )   
        
    }

    const handleAccess = () => {
        if(hasPermission === "denied")
            return (
                <SafeAreaView style={{flex: 1, backgroundColor: "#FBF6F2",}}>
                    <Text>No access to camera</Text>;
                </SafeAreaView>
            ) 

        if (hasPermission === null) 
            return (
                <SafeAreaView style={{flex: 1, backgroundColor: "#FBF6F2",}}>
                    <Text>Requesting for camera permission</Text>;
                </SafeAreaView>
            )    
        else {
            return (
               <View>
                    <BarCodeScanner 
                        onBarCodeScanned={handleBarCodeScanned}
                    />
                </View>  
            )
            
        }
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#FBF6F2",}}>
            {handleAccess()}
        </SafeAreaView>
    )
};

export default BarcodeScanner;