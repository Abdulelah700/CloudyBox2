
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA2sKl1XNDXXhx6kwsoIwau9hO5lxHRhF0",
    authDomain: "cloudybox-bd684.firebaseapp.com",
    databaseURL: "https://cloudybox-bd684.firebaseio.com",
    projectId: "cloudybox-bd684",
    storageBucket: "cloudybox-bd684.appspot.com",
    messagingSenderId: "889423234997"
  };

// Initialize your Firebase app
firebase.initializeApp(config);

// Reference to the recommendations object in your Firebase database
var planInfos = firebase.database().ref("PlanInfo");

// Save a new recommendation to the database, using the input in the form
var submitPlanInfo = function () {

  // Get input values from each of the form elements
  var FlightNumber = $("#FlightNumber").val();
  var PlaneModel = $("#PlaneModel").val();
  var Departure = $("#Departure").val();
  var Arrival = $("#Arrival").val();
  var CurrentTime = $("#CurrentTime").val();
  var NumberOfPassengers = $("#NumberOfPassengers").val();
  var Altitude = $("#Altitude").val();
  var GroundSpeed = $("#GroundSpeed").val();


  planInfos.push({
    "FlightNumber": FlightNumber,
    "PlaneModel": PlaneModel,
    "Departure": Departure,
    "Arrival": Arrival,
    "CurrentTime": CurrentTime,
    "NumberOfPassengers": NumberOfPassengers,
    "Altitude": Altitude,
    "GroundSpeed": GroundSpeed,
  });
};


planInfos.limitToLast(20).on('child_added', function(childSnapshot) {
//  console.log( childSnapshot.val());
  planInfo = childSnapshot.val();
  let table = document.getElementById('table');
  let id = childSnapshot.key;
  let row = document.createElement("tr");
  row.id=id;

  let FlightNumber = document.createElement("td");
  FlightNumber.id = id+"vFlightNumber";
  row.appendChild(FlightNumber);

  let PlaneModel = document.createElement("td");
  PlaneModel.id = id+"vPlaneModel";
  row.appendChild(PlaneModel);

  let Departure = document.createElement("td");
  Departure.id = id+"vDeparture";
  row.appendChild(Departure);

  let Arrival = document.createElement("td");
  Arrival.id = id+"vArrival";
  row.appendChild(Arrival);

  let CurrentTime = document.createElement("td");
  CurrentTime.id = id+"vCurrentTime";
  row.appendChild(CurrentTime);

  let NumberOfPassengers = document.createElement("td");
  NumberOfPassengers.id = id+"vNumberOfPassengers";
  row.appendChild(NumberOfPassengers);

  let Altitude = document.createElement("td");
  Altitude.id = id+"vAltitude";
  row.appendChild(Altitude);

  let GroundSpeed = document.createElement("td");
  GroundSpeed.id = id+"vGroundSpeed";
  row.appendChild(GroundSpeed);

  table.appendChild(row);

  $("#"+id+"vFlightNumber").html(planInfo.FlightNumber);
  $("#"+id+"vPlaneModel").html(planInfo.PlaneModel);
  $("#"+id+"vDeparture").html(planInfo.Departure);
  $("#"+id+"vArrival").html(planInfo.Arrival);
  $("#"+id+"vCurrentTime").html(planInfo.CurrentTime);
  $("#"+id+"vNumberOfPassengers").html(planInfo.NumberOfPassengers);
  $("#"+id+"vAltitude").html(planInfo.Altitude);
  $("#"+id+"vGroundSpeed").html(planInfo.GroundSpeed);



  // $("#vFlightNumber").html(planInfo.FlightNumber)
  // $("#vPlaneModel").html(planInfo.PlaneModel)
  // $("#vDeparture").html(planInfo.Departure)
  // $("#vArrival").html(planInfo.Arrival)
  // $("#vCurrentTime").html(planInfo.CurrentTime)
  // $("#vNumberOfPassengers").html(planInfo.NumberOfPassengers)
  // $("#vAltitude").html(planInfo.Altitude)
  // $("#vGroundSpeed").html(planInfo.GroundSpeed)

});

var updatePlanInfo = function () {


planInfo.on('value', function(snapshot){
  $("updateAltitude").val(snapshot.child('Altitude').val());
})


};

$(window).load(function () {
  $("#planInfoForm").submit(submitPlanInfo);
  $("#updateInfoForm").submit(updateInfoForm);

});
