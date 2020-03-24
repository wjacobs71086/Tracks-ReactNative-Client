import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign up for Tracker'
        onSubmit={signup}
        buttonText='Sign up now'
        error={state.error}
      />
      <Spacer>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.signIn}>Already have an account? Sign in.</Text>
        </TouchableOpacity>
      </Spacer>
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
  signIn:{
    color: 'blue',
    fontSize: 18,
  }
});

export default SignupScreen;
