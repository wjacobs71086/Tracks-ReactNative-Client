import axios from 'axios';

export default axios.create({
  // Remember this will change every 8 hours or restart, due to ngrok
  baseURL: 'http://ded8ee72.ngrok.io'
});
