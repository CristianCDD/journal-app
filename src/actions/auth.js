import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";

export const startLoginEmialPassword = (email, password) => {
  return (dispatch) => { // Aquí pasamos dispatch como argumento
    setTimeout(() => {
      dispatch(login(123, "pedro"));
    }, 3500);
  };
  
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const login = (uid, displayName) =>{
    return {
        type: types.login,
        payload: {
            uid, 
            displayName
        }
    }
}
