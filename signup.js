// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase, ref, child, set } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

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
const analytics = getAnalytics(app);
const db = getDatabase();

const userListRef = ref(db, 'Users/');

// Submit button
const submit = document.getElementById('register');
submit.addEventListener("click", function (event) {
    // Inputs
    const emailInput = document.getElementById('email').value;
    const email = emailInput+'@gmail.com';
    const password = document.getElementById('password').value;

    // Validate input fields
    if (ValidateEmail(emailInput) == false){
        alert('Incorrect format for username!');
        return; // Return if wasn't correct format
    }
    if (ValidatePassword(password) == false){
        alert('Password must be 6 characters or longer!');
        return; // Return if wasn't correct format
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // // Signed up, now adding to firebase realtime database
            // const userRef = child(userListRef, userCredential.user.uid);    // Goes under Users -> UID
            // set(userRef, {
            //     username: username,
            //     email: email
            // })
            // .then(() => {
            //     //alert("Account created successfully!");
            //     window.location.href="index.html";
            // })
            // .catch((error) => {
            //     alert(error.message);
            // })
            alert('Successfully signed up!')
            window.location.href="index.html";
        })
        .catch((error) => {
            alert(error.message)
        });

})

// Loggin in and logging out
const loginForm = document.querySelector('register');
logoutButton.addEventListener('submit', () => {

})

const logoutButton = document.querySelector('logout');
logoutButton.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            alert('user signed out');
        })
        .catch((error) => {
            alert(error);
        })
})


// Function to check possbility of email and password
function ValidateEmail(emailInput) 
{
    //var expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    var expression = /^[a-zA-Z0-9]+$/.test(emailInput);


 if (expression)
  {
    return (true)
  }
    return (false)
}

// Validate password
function ValidatePassword(password) {
    return password.length > 5;
}
