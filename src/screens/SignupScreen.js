import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';


const SignupScreen = ({ navigation }) => {
  const { state, signup, clearError} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents 
        onWillBlur={clearError}
      />
      <AuthForm
        headerText='Sign up for Tracker'
        onSubmit={signup}
        buttonText='Sign up now'
        error={state.error}
      />
      <NavLink
        text='Already have an account? Sign in.'
        routeName='Signin'
      />
    </View>
  );
};
// You don't have to use a function. Use function if you intend to use the navigation prop for navigating
SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    marginBottom: 350,
  },
  
});

export default SignupScreen;
