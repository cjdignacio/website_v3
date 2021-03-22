// Clock script courtesy of Dmytro Dzyubak
// dzyubak.com

function addLeadingZero(n) {
  return n < 10 ? '0' + n : n;
}

function windTheClock(timeZoneOffset)
{
var d = new Date();
d.setHours(d.getUTCHours() + 800); // set time zone offset
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var ampm = h >= 12 ? 'PM' : 'AM';
h = h % 12;
h = h ? h : 12; // replace '0' w/ '12'
h = addLeadingZero(h);
m = addLeadingZero(m);
s = addLeadingZero(s);

document.all["clock"].innerHTML = h + ':' + m + ':' + s
    + ' ' + ampm;
setTimeout(function(){ windTheClock(800) }, 1000);
}

window.onload = function() {
  windTheClock(2);
}

// Date script courtesy of ricocheting.com
// ricocheting.com/code/javascript/html-generator/date-time-clock

var tmonth=["January","February","March","April","May","June","July","August","September","October","November","December"];

function GetClock(){
var tzOffset = +8;//set this to the number of hours offset from UTC

var d=new Date();
var dx=d.toGMTString();
dx=dx.substr(0,dx.length -3);
d.setTime(Date.parse(dx))
d.setHours(d.getHours()+tzOffset);
var nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();


var clocktext=""+tmonth[nmonth]+" "+ndate+", "+nyear+"";
document.getElementById('clockbox').innerHTML=clocktext;
}

GetClock();
setInterval(GetClock,1000);
