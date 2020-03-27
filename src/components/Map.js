import React, { useContext } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-elements';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext'


const Map = () => {
  const { state: { currentLocation } } = useContext(LocationContext);
  if(!currentLocation) {
    return <ActivityIndicator size='large' style={{marginTop: 200}} />
  }

  return(
      <MapView 
      /*
      initialRegion: sets what the map starts at. The Delta's set the size/zoom of the view.
      */
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta:0.01,
          longitudeDelta:0.01,
        }}
        region={{
          ...currentLocation.coords,
          latitudeDelta:0.01,
          longitudeDelta:0.01
        }}
        style={styles.map}> 
        <Circle
          center={currentLocation.coords}
          radius={30}
          strokeColor='rgba( 158, 158, 255, 1.0)'
          fillColor='rgba( 158, 158, 255, 0.3)'
        />
        </MapView>
  )
}
const styles = StyleSheet.create({
  map:{
    height: 300
  }
})

export default Map;
