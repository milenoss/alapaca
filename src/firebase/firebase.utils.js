import firebase from 'firebase/app'; 
import 'firebase/firestore';
import 'firebase/auth'; 

const config = 
    {
        apiKey: "AIzaSyDHgLjXulZgCfYiPITkiQJm-gO7D-BM-JY",
        authDomain: "alapaca-27a50.firebaseapp.com",
        databaseURL: "https://alapaca-27a50.firebaseio.com",
        projectId: "alapaca-27a50",
        storageBucket: "alapaca-27a50.appspot.com",
        messagingSenderId: "472497466214",
        appId: "1:472497466214:web:b7c2ab36664c5e49c876a7",
        measurementId: "G-93ST38QH9Y"
      };


    //function that will allow us to take username and uid from the auth object 
    // since its an async function we have made use of async function
    //only want to perform the async if we get back the user object

    export const createUserProfileDocument = async (userAuth, additionalData) => { 
        // checking if the user exist if it does then get the id and snapshot of doc
        if(!userAuth) return; 
        const userRef = firestore.doc(`users/${userAuth.uid}`)
        const snapShot = await userRef.get();

        //if snapshot does not exist we create the data
        if(!snapShot.exist) { 
            const { displayName, email} = userAuth; 
            const createdAt = new Date(); 
            try { 
                await userRef.set ({
                   displayName, 
                   email, 
                   createdAt, 
                   ...additionalData 
                })
            }catch (error) {
                console.log('error creating user', error.message)

            }
        }
        return userRef;
    }

    
    


    firebase.initializeApp(config)

    export const auth = firebase.auth();
    export const firestore = firebase.firestore();


    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
        'prompt': 'select_account'
    })
    export const signInWithGoogle = () => auth.signInWithPopup(provider);

    export default firebase;
