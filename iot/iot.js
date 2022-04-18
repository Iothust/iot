
// //----------------------
const firebaseConfig = {
  apiKey: "AIzaSyDdudMaqfkZ-q_RLNSqP-dyuCWnSs9mV_w",
  authDomain: "room-iot-90cd0.firebaseapp.com",
  databaseURL: "https://room-iot-90cd0-default-rtdb.firebaseio.com",
  projectId: "room-iot-90cd0",
  storageBucket: "room-iot-90cd0.appspot.com",
  messagingSenderId: "595571815468",
  appId: "1:595571815468:web:cce7937797a1c221570d89",
  measurementId: "G-XMEWBWN4YJ"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();


var btnOn = document.getElementById("btnOnId_01");
var btnOff = document.getElementById("btnOffId_01");
var bomOn = document.getElementById("btnOnId_02");
var bomOff = document.getElementById("btnOffId_02");
var treeOn = document.getElementById("btnOnId_03");
var treeOff = document.getElementById("btnOffId_03");
var tableOn = document.getElementById("btnOnId_04");
var tableOff = document.getElementById("btnOffId_04");
var dkOn = document.getElementById("btnOnId_05");
var dkOff = document.getElementById("btnOffId_05");

//Lấy nhiệt độ
database.ref("TT_IoT/Chuyendong").on("value", function(snapshot){
	var chuyendong =snapshot.val();
	document.getElementById("chuyendong").innerHTML = chuyendong;
});


//Lấy độ ẩm
database.ref("TT_IoT/Doam").on("value", function(snapshot){
	var hum =snapshot.val();
	document.getElementById("doam").innerHTML = hum;
});

//Lấy ánh sáng
database.ref("TT_IoT/Khoi").on("value", function(snapshot){
	var khoi =snapshot.val();
	document.getElementById("khoi").innerHTML = khoi;
});

btnOn.onclick = function(){
	// document.getElementById("quatId_01").src ="./img/fanon.png"	
	database.ref("/TT_IoT").update({
		"Quat": "1"
	});
}

btnOff.onclick = function(){
	// document.getElementById("quatId_01").src ="./img/fanoff.png"	
	database.ref("/TT_IoT").update({
		"Quat": "0"
	});
}

bomOn.onclick = function(){
	// document.getElementById("bomId_01").src ="./img/pumpon.png"	
	database.ref("/TT_IoT").update({ 
		"Bom": "1"
	});
}
bomOff.onclick = function(){
	// document.getElementById("bomId_01").src ="./img/pumpoff.png"	
	database.ref("/TT_IoT").update({
		"Bom": "0"
	});
}

treeOn.onclick = function(){
	// document.getElementById("treeId_01").src ="./img/treeon.png"	
	database.ref("/TT_IoT").update({ 
		"CayLed": "1"
	});
}
treeOff.onclick = function(){
	// document.getElementById("treeId_01").src ="./img/treeoff.png"	
	database.ref("/TT_IoT").update({
		"CayLed": "0"
	});
}
tableOn.onclick = function(){
	// document.getElementById("tableId_01").src ="./img/tableon.png"	
	database.ref("/TT_IoT").update({
		"BanLed": "1"
	});
}
tableOff.onclick = function(){
	// document.getElementById("tableId_01").src ="./img/tableoff.png"	
	database.ref("/TT_IoT").update({
		"BanLed":"0"
	});
}
dkOff.onclick = function(){
	// document.getElementById("tableId_01").src ="./img/automatic.png"	
	database.ref("/TT_IoT").update({
		"DieuKhien": "0"
	});
}
dkOn.onclick = function(){
	// document.getElementById("tableId_01").src ="./img/hand.png"	
	database.ref("/TT_IoT").update({
		"DieuKhien":"1"
	});
}


database.ref("TT_IoT/Quat").on("value", function(snapshot){
	var fan =snapshot.val();
	if (fan == "0")
		document.getElementById("quatId_01").src ="./img/fanoff.png";
	else
		document.getElementById("quatId_01").src ="./img/fanon.png";
});

database.ref("TT_IoT/Bom").on("value", function(snapshot){
	var pump =snapshot.val();
	if (pump == "0")
		document.getElementById("bomId_01").src ="./img/pumpoff.png";
	else
		document.getElementById("bomId_01").src ="./img/pumpon.png";
});

database.ref("TT_IoT/BanLed").on("value", function(snapshot){
	var tableLed =snapshot.val();
	if (tableLed == "0")
		document.getElementById("tableId_01").src ="./img/tableoff.png";
	else
		document.getElementById("tableId_01").src ="./img/tableon.png";
});
database.ref("TT_IoT/CayLed").on("value", function(snapshot){
	var treeLed =snapshot.val();
	if (treeLed == "0")
		document.getElementById("treeId_01").src ="./img/treeoff.png";
	else
		document.getElementById("treeId_01").src ="./img/treeon.png";
});
database.ref("TT_IoT/DieuKhien").on("value", function(snapshot){
	var dk =snapshot.val();
	if (dk == "1")
		document.getElementById("dkId_01").src ="./img/automatic.png";
	else
		document.getElementById("dkId_01").src ="./img/hand.png";
});
