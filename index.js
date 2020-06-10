// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: 'marcador-409f4.firebaseapp.com',
  databaseURL: 'https://marcador-409f4.firebaseio.com',
  projectId: 'marcador-409f4',
  storageBucket: 'marcador-409f4.appspot.com',
  messagingSenderId: '232072116793',
  appId: '1:232072116793:web:af84b42405401beee86be8',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const winBox = document.querySelector('.win');
const loseBox = document.querySelector('.lose');
const buttons = document.querySelectorAll('.btn');

// Get a reference to the database service
const db = firebase.database();
const win = db.ref('win');
const lose = db.ref('lose');
let winValue;
let loseValue;

win.on('value', function(snapshot) {
  winValue = snapshot.val();
  winBox.innerText = winValue;
});
lose.on('value', function(snapshot) {
  loseValue = snapshot.val();
  loseBox.innerText = loseValue;
});

// handler function
function handleButtonClick(e) {
  const value = e.target.innerText;
  switch (value) {
    case 'win+':
      win.set(winValue + 1);
      break;
    case 'lose+':
      lose.set(loseValue + 1);
      break;
    case 'win-':
      win.set(winValue - 1);
      break;
    case 'lose-':
      lose.set(loseValue - 1);
      break;
    default:
      win.set(0);
      lose.set(0);
  }
}
// add event listener
buttons.forEach(button => button.addEventListener('click', handleButtonClick));
