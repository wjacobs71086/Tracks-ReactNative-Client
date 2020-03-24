import React, { useState } from 'react';
import { Text, Button, Input } from 'react-native-elements';
import {StyleSheet} from 'react-native';
import Spacer from '../components/Spacer';

const AuthForm = ({ headerText, error, onSubmit, buttonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <Spacer>
      <Text h3>{headerText}</Text>
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
      {error ? <Text style={styles.error}>{error}</Text> : null}
        <Button title={buttonText} onPress={() => onSubmit({email,password})} />
      </Spacer>
    </>
  )
}


const styles = StyleSheet.create({
  error:{
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 15,
  },
});

export default AuthForm;


