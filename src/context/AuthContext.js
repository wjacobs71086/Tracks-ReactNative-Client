import createDataContext from './createDataContext';
import trackerApi from '../Api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';
import tracker from '../Api/tracker';

const authReducer = ( state, action ) => {
  switch(action.type){ 
    case 'signin':
      return {...state, token: action.payload}
    case 'sign_out':
      return {...state, token: null, error: ''}
    case 'add_error':
      return {...state, error: action.payload}
    case 'clear_error':
      return { ...state, error: ''};
    default:
      return state;
  }
};

const clearError = ( dispatch ) => () => {
  dispatch({ type: 'clear_error'})
}

const signup = (dispatch) => async ({email, password}) => {
    try {
      let response = await trackerApi.post('/signup',{ email,password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signin', payload: response.data.token});
      //navigate to mainFlow => TrackList
      navigate('TrackList');
    } catch (err) {
      dispatch({type: 'add_error', payload: `Error during sign up.`})
    }
  };

const signin = (dispatch) => async ({email, password}) => {
    try{
      let response = await trackerApi.post('/signin', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signin', payload: response.data.token});
      navigate('TrackList');
    } catch(err) {
      dispatch({type: 'add_error', payload: 'Error during sign in.'})
    }
  };

const signOut = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type:'sign_out'})
    return  navigate('loginFlow');
  };

const tryLocalSignin = (dispatch) =>  async () => {
  const token = await AsyncStorage.getItem('token');
  if(token) {
    dispatch({type:'signin', payload:token});
    navigate('TrackList');
  } else {
    navigate('loginFlow')
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signOut, clearError, tryLocalSignin },
  { token:null , error: '' }
)