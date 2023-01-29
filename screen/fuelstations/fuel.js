import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import Stations from './stations';
import * as Location from 'expo-location'

export default function Fuel(){
    const navigation=useNavigation()
    const[mapRegion,setmapRegion]=useState({

    })

    const userLocation = async()=>{
        let {status}= await Location.requestForegroundPermissionsAsync();
        if(status!=='granted'){
            setErrorMessage('Permission to access location was denied');
            return;
        }
        let location = await Location.getCurrentPositionAsync({timeInterval:1000});
        setmapRegion(location);
        console.log(location.coords.latitude,location.coords.longitude)
    }
    useEffect(()=>{
        userLocation();
    },[]);
return(   
        <View style={styles.container}>
            <View style={styles.navigater}>
                <Button onPress={()=>navigation.goBack()}>Go back</Button>
            </View>     
            <View style={styles.mapcontain}>
                <MapView style={styles.map} region={mapRegion}>
                {Stations.map((station) => (
                    <Marker
                        key={station.name}
                        coordinate={{
                            latitude: station.latitude,
                            longitude: station.longitude
                        }}
                        title={station.name}
                        description={station.address}
                    />
                ))}
                        
                    
                </MapView>
            </View>    
        </View>
)}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    map:{
        width:'100%',
        height:'100%'
    }

})