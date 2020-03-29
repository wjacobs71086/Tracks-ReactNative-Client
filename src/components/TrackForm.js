import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
  const { startRecording, stopRecording, changeName, state: {name, recording, locations} } = useContext(LocationContext);
  console.log('num of locations =>',locations.length)
  return (
    <>
      <Spacer>
        <Input 
          placeholder='Track name' 
          value={name}
          onChangeText={changeName}/>
      </Spacer>
      <Spacer>
        {(recording) ? (<Button title='Stop' onPress={stopRecording}/>) : (<Button title='Start Recording' onPress={startRecording}/>)}
      </Spacer>
    </>
  )
};

export default TrackForm;