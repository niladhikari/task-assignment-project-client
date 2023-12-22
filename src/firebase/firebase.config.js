


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6qx6FJhaVO1_8eV5ZC9mqX44gWL-OXrg",
  authDomain: "task-manage-6db6e.firebaseapp.com",
  projectId: "task-manage-6db6e",
  storageBucket: "task-manage-6db6e.appspot.com",
  messagingSenderId: "829137181048",
  appId: "1:829137181048:web:3650f866fd993056a9108d"
};

const app = initializeApp(firebaseConfig);
const auth  = getAuth(app)
export default auth