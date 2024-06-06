const { initializeApp } = require('firebase/app');
const { getDatabase, enableLogging, ref, get, child  } = require('firebase/database');

const firebaseConfig = {
    apiKey: "AIzaSyCVbACGxtuXxmxpP4gsdKhoHHS04qe_oWY",
    authDomain: "salesdashboard-288ff.firebaseapp.com",
    databaseURL: "https://salesdashboard-288ff-default-rtdb.firebaseio.com",
    projectId: "salesdashboard-288ff",
    storageBucket: "salesdashboard-288ff.appspot.com",
    messagingSenderId: "411755399724",
    appId: "1:411755399724:web:5ee0cf74d3bbe3d1435f89",
    measurementId: "G-ETP22XP15K"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
 enableLogging(true);
module.exports = { database , ref, get, child };
