import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = () => {
  const { state, signin, clearError } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents 
        // we are about to nav to the screen, basically "onClick"
        //onWillFocus
        // when we successfully complete the navigation
        //onDidFocus
        // when navigating AWAY from a screen
        onWillBlur={clearError}
        // When the transition completes
        //onDidBlur
      />
      <AuthForm
        headerText='Sign in'
        onSubmit={signin}
        buttonText='Sign In'
        error={state.error}
      />
      <NavLink
        text={`Don't have an Account? Sign up.`}
        routeName='Signup'
      />
    </View>
  )
};

SigninScreen.navigationOptions = () => {
  return {headerShown: false }
};



const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    marginBottom: 350,
  },
});

export default SigninScreen;
