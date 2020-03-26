import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import MapView, { Polyline } from 'react-native-maps';



const Map = () => {
  
  let points =[];
  for(let i = 0; i < 20; i++){
    if( i%2){
      points.push({
      latitude: 37.33233 + i * 0.001,
      longitude: -122.03121 + i * 0.001
    })
    } else {
      points.push({
        latitude: 37.33233 + i * 0.002,
        longitude: -122.03121 + i * 0.001
      })
    }
    
  }
  return(
    <View>
      <Text h5> I'm A MAP</Text>
      <MapView 
      /*
      initialRegion: sets what the map starts at. The Delta's set the size/zoom of the view.
      */
        initialRegion={{
          latitude: 37.33233,
          longitude: -122.03121,
          latitudeDelta:0.01,
          longitudeDelta:0.01,
        }}
        style={styles.map}> 
        {/* Takes a series of points and overlays them on the map */}
        <Polyline
          coordinates={points}
        />
        </MapView>
    </View>
  )
}
const styles = StyleSheet.create({
  map:{
    height: 300
  }
})

export default Map;
