// Create a new file named userReducer.js in the ducks folder
//Import axios from 'axios'
import axios from 'axios';




// initialState: { email: null, firstName: null, lastName: null }
const initialState = {
    email: null,
    firstName: null,
    lastName: null
}

//Create an action type named REQUEST_USER_DATA
const REQUEST_USER_DATA = 'REQUEST-USER-DATA'



//Create an action creator function (named requestUserData) that makes an http request 
//for user data; // Method: GET //URL: '/auth/user-data'
// You should get used to using the network tab in your chrome dev tools to check what the response looks like from 
// an http request. But if you need help, you can also check below for what the reponse looks like.
export const requestUserData = () => {
    //The payload should be the response from the http request
    let data = axios.get('/auth/user-data').then(res => res.data)
    //The action that is returned from the action creator should have type and payload properties.
    
    return {
      type: REQUEST_USER_DATA,
      payload: data
    }
  }



// Add it to the combine reducer object with a property of user
// export default the reducer function. This function will take in state 
// and action a paramenters. initialState will be the default value for state parameter.
// Return state in reducer function.
//NOTE: You should get used to using the network tab in your chrome dev tools to check what the response looks 
//like from an http request. But if you need help, you can also check below for what the reponse looks like.
// Response Object:

// {
//   ...,
//   data: {
//     user: {
//       email: 'someEmail',
//       firstName: 'name',
//       lastName: 'name'
//     }
//   }
// }
//Update the reducer function the have a switch statement testing for the value of action.type.

export default function reducer (state = initialState, action){
    switch (action.type) {
        case REQUEST_USER_DATA + '_FULFILLED':
        //When the request is fulfilled, return a new state object with email, firstName, and lastName properties.
            const { email, firstName, lastName } = action.payload.user
            return { email, firstName, lastName };
        default:
        return state;
    }
    
}














