import axios from 'axios';

export default axios.create({
  // Remember this will change every 8 hours or restart, due to ngrok
  baseURL: 'http://71f630cf.ngrok.io'
});
