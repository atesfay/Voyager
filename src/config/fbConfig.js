import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCm_6BksxWK1PmnprpYeNTidnq1FpcIxv4",
    authDomain: "voyager-6a163.firebaseapp.com",
    databaseURL: "https://voyager-6a163.firebaseio.com",
    projectId: "voyager-6a163",
    storageBucket: "voyager-6a163.appspot.com",
    messagingSenderId: "151601861455",
    appId: "1:151601861455:web:17ff2e5cb9792b009a2b3a",
    measurementId: "G-JGC0NLP421"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;