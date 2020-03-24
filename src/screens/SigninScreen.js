import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
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
