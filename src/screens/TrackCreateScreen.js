import React, {  useContext, useCallback } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
//import '../_mockLocation';


const TrackCreateScreen = ({ isFocused }) => {

  const { addLocation, state: {recording}} = useContext(LocationContext);

  const callback = useCallback( location => {
    addLocation(location, recording);
  }, [recording])

  const [err] = useLocation(isFocused || recording, callback );


  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Map/>
      <TrackForm/>
      {(err) ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  )
};

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name='plus' size={20}/>
}

export default withNavigationFocus(TrackCreateScreen);
