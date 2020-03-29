import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const { startRecording, stopRecording, changeName, state: {name, recording, locations} } = useContext(LocationContext);
  console.log('locations =>',locations.length);

  const [saveTrack]= useSaveTrack();

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
      <Spacer>
        {(!recording && locations.length > 0) ? <Button title='Save Track' onPress={saveTrack} /> : null}
      </Spacer>
    </>
  )
};

export default TrackForm;