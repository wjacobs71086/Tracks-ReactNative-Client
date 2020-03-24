import createDataContext from './createDataContext';
import trackerApi from '../Api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';

const authReducer = ( state, action ) => {
  switch(action.type){ 
    case 'signup':
      return {error: '', token: action.payload}
    case 'signin':
      return
    case 'sign_out':
      return
    case 'add_error':
      return {...state, error: action.payload}
    default:
      return state;
  }
};
// TOKEN test4 / eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTdhNWM0NDc5ZjA5NDM1YmExYzFhZTAiLCJpYXQiOjE1ODUwNzczMTZ9.SNuWx537OU6D_QjXcEcLTaF58JqPflLualj8aQAtQ78

const signup = (dispatch) => async ({email, password}) => {
    try {
      let response = await trackerApi.post('/signup',{ email,password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signup', payload: response.data.token});
      //navigate to mainFlow => TrackList
      navigate('TrackList');
    } catch (err) {
      dispatch({type: 'add_error', payload: `Error during sign up.`})
    }
  };

const signin = (dispatch) => async ({email, password}) => {
    // try and sign in
    // handle success by updating state
    // if Fails show error
  };

const signOut = (dispatch) => () => {
    // try and sign out
  };

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signOut },
  { token:null , error: '' }
)