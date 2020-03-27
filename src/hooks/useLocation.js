import { useEffect, useState } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';


export default (callback) => {
  const [ err, setErr ] = useState(null);

  const startWatching = async () => {
    try{
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
        }, 
        //This is the "callback" for using the location?
        callback
      )
    } catch(err) {
      setErr(err)
    }
  }

  useEffect(()=>{
    startWatching();
  }, [])

//this is a convention of hooks to return an array since you may return multiple items.
return [err];

};