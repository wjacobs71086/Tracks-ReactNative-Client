import createDataContext from './createDataContext';
import trackerApi from '../Api/tracker';

const authReducer = ( state, action ) => {
  switch(action.type){ 
    case 'signup':
      return
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

const signup = (dispatch) => {
  return async ({email, password}) => {
    try {
      let response = await trackerApi.post('/signup',{
      email,
      password
    });
    console.log('response', response.data)
    } catch (err) {
      dispatch({type: 'add_error', payload: `Error during sign up.`})
    }
    // make API request with the provided email and password
    

    // If correct, then modify state to show we are authenticated

    // If FAILS, show error message
  }
};

const signin = (dispatch) => {
  return ({email, password}) => {
    // try and sign in
    // handle success by updating state
    // if Fails show error
  }
};

const signOut = (dispatch) => {
  return () => {
    // try and sign out
  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signOut },
  { isSignedIn:false, error: '' }
)