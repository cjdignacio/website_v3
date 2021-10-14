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

var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

if(nhour<=9) nhour="0"+nhour;
if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

var timetext=""+nhour+":"+nmin+":"+nsec+ap+"";
document.getElementById('time').innerHTML=timetext;

var datetext=""+tmonth[nmonth]+" "+ndate+", "+nyear+"";
document.getElementById('date').innerHTML=datetext;

}

GetClock();
setInterval(GetClock,1000);
