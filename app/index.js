var admin = require("firebase-admin");
var firebase = require("firebase");
console.log('initializing...');

admin.initializeApp({
  credential: admin.credential.cert("./firebase-service-key.json"),
  databaseURL: "https://cypherapp-ef93a.firebaseio.com"
});


var db = admin.database();
var ref = db.ref("cypherapp/rooms");

// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
  console.log('got a value! ' + JSON.stringify(snapshot.val()));
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});


