import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';



const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{fontSize: 30}}>TrackListScreen</Text>
      <Button title='Go to TrackDetail' onPress={() => navigation.navigate('TrackDetail')}/>

    </>
  )
};

const styles = StyleSheet.create({
  
});

export default TrackListScreen;
