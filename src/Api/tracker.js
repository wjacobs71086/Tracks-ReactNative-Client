import axios from 'axios';

export default axios.create({
  // Remember this will change every 8 hours or restart, due to ngrok
  baseURL: 'http://fb73b88a.ngrok.io'
});
