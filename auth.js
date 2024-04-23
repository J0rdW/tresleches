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
const path = window.location.pathname;

// if((path === '/liomarspage.html') || (path === '/abelespage.html') || (path === '/janetspage.html') || (path === '/jordanspage.html')){
//     document.getElementById("whole").style.display = "none";
    
//     auth.onAuthStateChanged(function(user) {
//         if(!user){
//             document.getElementById("whole").style.display = "none";
//             window.location.href="login.html?redirected=true";
//         } else if(user){
//             document.getElementById("whole").style.display = "block";
//         }
//     });
// }

// Preventing directly going to profile page when logged out...
auth.onAuthStateChanged(function(user) {
    var profiles = ['/liomarspage.html', '/abelespage.html', '/janetspage.html', '/jordanspage.html'];
    var protectedProfile = profiles.includes(window.location.pathname);
    if(!user && protectedProfile) {
        window.location.replace("/login.html");
    } else{
        document.getElementById("header").style.display = "block";
        document.getElementById("additional").style.display = "block";
    }
});

 // Logout
 const logoutLink = document.getElementById('logout');
 if(logoutLink){
 logoutLink.addEventListener("click", function(event) {
    event.preventDefault();
    auth.signOut().then(() => {
        // If signout succesful:
        window.location.href = "login.html";
    }).catch((error) => {
        alert(error);
    });
 });
}

 // Prevent going back to login page if logged in (i think we should, right?)
 const stopLogin = document.getElementById('login');
 stopLogin.addEventListener("click", function(event) {
    event.preventDefault();
    auth.onAuthStateChanged(user => {
        if(user){
            alert('You are already logged in.');
            window.location.href="index.html";
        } else{
            window.location.href="login.html";
        }
    });
 });

  // Prevent going to any of our members links when logged out
  const stopProfile = document.querySelectorAll('.profile');
  stopProfile.forEach(stopProfile => {
     stopProfile.addEventListener("click", function(event){
         auth.onAuthStateChanged(user => {
             if(!user){
                 window.location.href="login.html?redirected=true";
                 alert('You must login first!');
             }
         });
     });
  });
  // Redirected to login.html?redirected=true
  document.addEventListener("DOMContentLoaded", function() {
     const urlParams = new URLSearchParams(window.location.search);
     const redirected = urlParams.get('redirected');
     if(redirected) {
         alert('You must login first!');
     }
  });