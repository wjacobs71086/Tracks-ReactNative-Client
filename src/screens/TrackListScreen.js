import React, { useContext } from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { Context  as TrackContext } from '../context/TrackContext'; 



const TrackListScreen = ({ navigation }) => {
  const { fetchTracks, state } = useContext(TrackContext);
  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks}/>
      <FlatList 
        data={state}
        keyExtractor={item => item._id}
        renderItem={({item }) => {
          return <TouchableOpacity onPress={() => {
            navigation.navigate('TrackDetail', {_id: item._id})
            }}>
            <ListItem chevron title={item.name}/>
          </TouchableOpacity>
        }}
      />
    </>
  )
};

const styles = StyleSheet.create({
  
});

TrackListScreen.navigationOptions = { title : 'Tracks'};

export default TrackListScreen;
