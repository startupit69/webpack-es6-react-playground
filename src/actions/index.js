import alt from '../alt';
import Firebase from 'firebase';
import firebaseConfig from '../firebase.config.js';

class Actions {

  login(args) {
    return (dispatch) => {
      var firebaseRef = new Firebase(firebaseConfig.firebaseURL);
      firebaseRef.authWithOAuthPopup("google", (error, user) => {
        if(error){
          return;
        };

        dispatch(user);
      });
    }
  }
}

export default alt.createActions(Actions);
