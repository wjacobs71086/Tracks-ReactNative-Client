import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign up for Tracker</Text>
      </Spacer>
      <Spacer>
        <Input 
          autoCapitalize='none'
          autoCorrect={false}
          value={email}
          label="Email"
          onChangeText={setEmail}
        />
      </Spacer>
      <Spacer>
        <Input 
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry
          value={password}
          label="Password" 
          onChangeText={setPassword}/>
      </Spacer>
      <Spacer>
      {state.error ? <Text style={styles.error}>{state.error}</Text> : null}
        <Button title="Sign Up" onPress={() => {
          return signup({email, password})
        }} />
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
  error:{
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 15,
  }
});

export default SignupScreen;
