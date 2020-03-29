import { useEffect, useState } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';


export default (shouldTrack , callback) => {
  const [ err, setErr ] = useState(null);
  


  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        await requestPermissionsAsync();
        subscriber = await watchPositionAsync(
          {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
          }, 
          callback
        );
      } catch(err) {
        setErr(err)
      }
    }


    if(shouldTrack){
      startWatching();
    } else {
      if(subscriber){
        subscriber.remove();
        setSubscriber = null;
      }
    }
    return () => {
     if(subscriber) {
       subscriber.remove();
     }
    };
  }, [shouldTrack, callback ]);

//this is a convention of hooks to return an array since you may return multiple items.
return [err];

};