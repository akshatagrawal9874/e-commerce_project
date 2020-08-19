import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var myconfig = {
    apiKey: "AIzaSyCoPXzokR_oo1ZdU8OM1Gjq7dEKtoHUbDo",
    authDomain: "ecommerce-beffd.firebaseapp.com",
    databaseURL: "https://ecommerce-beffd.firebaseio.com",
    projectId: "ecommerce-beffd",
    storageBucket: "ecommerce-beffd.appspot.com",
    messagingSenderId: "652362237742",
    appId: "1:652362237742:web:91244e963261879fba5cbf",
    measurementId: "G-8KTE4JCXV2"
};
firebase.initializeApp(myconfig)
 export const auth =firebase.auth();
 export const firestore=firebase.firestore();

 export const UserProfile = async(userAuth)=>
 {
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists)
    {
        const {displayName,email}=userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
            })
        }
        catch(err)
        {
          console.log(`user doesn't exist ${err}`);
        }
    }
    return userRef;
 }

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({ prompt:'select_account' });
 export const signInWithGoogle =()=>auth.signInWithPopup(provider);

 export default firebase;