import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({navigation, text, routeName, }) => {
  return(
    <Spacer>
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
  <Text style={styles.signIn}>{text}</Text>
      </TouchableOpacity>
    </Spacer>
  )
};

const styles = StyleSheet.create({
  signIn:{
    color: 'blue',
    fontSize: 18,
  },
})

export default withNavigation(NavLink);

