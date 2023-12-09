var firebaseConfig = {
  apiKey: "AIzaSyBGDUFf2yUoNLjoMOdqzOElsPNShQERGFE",
  authDomain: "raptor-40530.firebaseapp.com",
  databaseURL: "https://raptor-40530-default-rtdb.firebaseio.com",
  projectId: "raptor-40530",
  storageBucket: "raptor-40530.appspot.com",
  messagingSenderId: "661925788629",
  appId: "1:661925788629:web:2d928195c605bb58f4db5c"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function add_room(){
    RoomName=document.getElementById("index2").value;
    firebase.database().ref("/").child(RoomName).update({
        purpose: "adding Room Name"
    });

    localStorage.setItem("Room Name", RoomName);

    window.location ="indexthree.html";
  }
  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
  
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(Room){
    localStorage.setItem("Room Name", Room);
    window.location ="indexthree.html"
    
    
  }