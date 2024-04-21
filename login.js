// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

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
const auth = getAuth();
const analytics = getAnalytics(app);

// Submit button
const submit = document.getElementById('signin');
submit.addEventListener("click", function (event) {
    event.preventDefault();

    // Inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert("Successfully logged in!");
            window.location.href="index.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });

})
