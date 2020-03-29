import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons'

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext)
  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text style={{fontSize: 30}}>Account Screen</Text>
      <Spacer>
        <Button 
          title='Sign Out'
          onPress={signOut}
        />
      </Spacer>
    </SafeAreaView>
  )
};

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name='gear' size={20}/>
}

export default AccountScreen;
