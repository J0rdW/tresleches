// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyAJ9aFgxTAOaUm4AUBaSvb6NCZt9DXgHTw",

    authDomain: "senior-design-lab3.firebaseapp.com",

    databaseURL: "https://senior-design-lab3-default-rtdb.firebaseio.com",

    projectId: "senior-design-lab3",

    storageBucket: "senior-design-lab3.appspot.com",

    messagingSenderId: "7855005794",

    appId: "1:7855005794:web:a034cf6cd02d73577df13b",

    measurementId: "G-MG0FH2C8J8"

};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase()
const analytics = getAnalytics(app);
const dbref = ref(db);

const userListRef = ref(db, 'Users/');

// Check if user is logged in (just writes to console)
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('You are currently logged IN');
    }
});

// Prevent going back to login page if logged in (i think we should, right?)
const stopLogin = document.getElementById('login');
stopLogin.addEventListener("click", function (event) {
    event.preventDefault();
    auth.onAuthStateChanged(user => {
        if (user) {
            alert('You are already logged in.');
            window.location.href = "index.html";
        } else {
            window.location.href = "login.html";
        }
    });
});


// Log in button
const submit = document.getElementById('signin');
submit.addEventListener("click", function (event) {
    event.preventDefault();

    // Inputs
    const emailInput = document.getElementById('email').value;
    const email = emailInput+'@gmail.com';
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in and goes back to index.html
            const user = userCredential.user;
            alert("Successfully logged in!");
            window.location.href="index.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });

});


// Logout
const logoutLink = document.getElementById('logout');
logoutLink.addEventListener("click", function (event) {
    event.preventDefault();
    signOut(auth).then(() => {
        // If signout succesful:
        auth.onAuthStateChanged(user => {
            if (!user) {
                alert('Successfully logged out!');
                loggedOut = true;
                window.location.href = "index.html";
            }
        });

    }).catch((error) => {
        alert(error);
    });
});