var ss=setInterval(function(){
    showtime();
    
},1000);
function showtime(){
    var date1=new Date();
    var hour=date1.getHours();
    var minutes=date1.getMinutes()
    var second=date1.getSeconds();
    var am_pm="AM"
    if(hour>=12){
        hour=hour-12;
        am_pm="PM"
    }
    if(hour==0)
    {
        hour=12;
    }

    var hours=hour<10? "0"+hour :hour;
    var mins=min<10 ? "0"+minutes :minutes;
    var secs=sec<10 ? "0"+second :second

    var hour1=document.getElementById("hour");
    hour1.textContent=hour;
   

    var min=document.getElementById("min")
     min.textContent=mins;
    var sec=document.getElementById("sec")
    sec.textContent=secs
    
    var amm=document.getElementById("am")
     amm.textContent=am_pm;
}

var month=new Date();
month1=month.getMonth()

var mon=["Jan","Feb","Mar","April","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]

var a=mon[month1];
var month11=document.getElementById("month")
month11.append(a)

var date=month.getDate()

var date11=document.getElementById("date")
date11.append(date)

var year=month.getFullYear()

var year11=document.getElementById("year")
year11.append(year)


    
   

