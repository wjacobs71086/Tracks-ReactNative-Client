import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  // Remember this will change every 8 hours or restart, due to ngrok
  baseURL: 'http://71f630cf.ngrok.io'
});

instance.interceptors.request.use(
  async (config) => {
  const token =  await AsyncStorage.getItem('token');
    if(token){
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  
)

export default instance;

