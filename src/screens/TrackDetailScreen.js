import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';


const TrackDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam('_id');
  const { state } = useContext(TrackContext);

  const track = state.find(t => t._id === _id)

  return (
    <View>
      <Text style={{fontSize: 30}}>{track.name}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  
});

export default TrackDetailScreen;
