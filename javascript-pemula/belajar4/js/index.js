var hours = new Date().getHours();
var minutes = new Date().getMinutes();

var time = hours+":"+minutes;
var pengisian = "10:45";

(pengisian == time) ? console.log("sama") : console.log("tidak sama");
