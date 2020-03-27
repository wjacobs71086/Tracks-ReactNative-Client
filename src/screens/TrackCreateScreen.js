import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import {Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation'
import Map from '../components/Map';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import { Context as LocationContext } from '../context/LocationContext';

//import '../_mockLocation';


const TrackCreateScreen = () => {
  const [ err, setErr ] = useState(null);
  const { addLocation } = useContext(LocationContext);

  const startWatching = async () => {
    try{
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
        }, 
        location => {
        //This is the "callback" for using the location?
        addLocation(location);
      })
    } catch(err) {
      setErr(err)
    }
  }

useEffect(()=>{
  startWatching();
}, [])

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text h3>Create a Track</Text>
      <Map/>
      {(err) ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  
});

export default TrackCreateScreen;
