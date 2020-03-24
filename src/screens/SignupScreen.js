import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
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
        <Button title="Sign Up" onPress={() => navigation.navigate("Signin")} />
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
  }
});

export default SignupScreen;
