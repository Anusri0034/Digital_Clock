function digitalClock()
{

    let now = new Date();

    let hour = now.getHours();
    let ampm = "AM";

    if(hour >= 12){
    ampm = "PM";
    }

   if(hour > 12){
    hour = hour - 12;
   }

   if(hour == 0){
    hour = 12;
    }
    let minute = now.getMinutes();
    let second = now.getSeconds();

    if(hour < 10){
        hour = "0" + hour;
    }

    if(minute < 10){
        minute = "0" + minute;
    }

    if(second < 10){
        second = "0" + second;
    }


    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
    document.getElementById("ampm").innerHTML = ampm;

    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    document.getElementById("day").innerHTML = days[now.getDay()];

    document.getElementById("todayDate").innerHTML =[now.getDate()] + " " + months[now.getMonth()] + " " + now.getFullYear();
    }

digitalClock();

setInterval(digitalClock,1000);