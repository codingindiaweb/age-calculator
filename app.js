var dataPicker= document.getElementById("datePicker");
var choseDate=document.getElementById("choseDate")

var ageYear=document.getElementById('ageYear');
var ageMonth=document.getElementById('ageMonth'); 
var ageDay=document.getElementById('ageDay');
var ageHour=document.getElementById('ageHour');
var ageSecond=document.getElementById('ageSecond');
var ageMiliSecond=document.getElementById('ageMiliSecond');

dataPicker.addEventListener('change',function(){
    var options={year:'numeric',month:'long',day:'numeric'};
    var selectedDate=new Date(this.value);
    var DOB=selectedDate.toLocaleDateString('en-US',options)

    choseDate.innerHTML="DOB IS : " +DOB;
    var miliSecondsDOB=Date.parse(DOB);
    var miliSecondsNow=Date.now();

    var age_in_MiliSeconds = miliSecondsNow - miliSecondsDOB;
    var miliSeconds = age_in_MiliSeconds;
	var second = 1000;
	var minute = second*60;
	var hour = minute*60;
	var day = hour*24;
	var month = day*30;
	var year = day*365;

	var years = Math.round(miliSeconds/year);
	var months = years*12;
	var days = years*365;
	var hours = Math.round(miliSeconds/hour);
	var seconds = Math.round(miliSeconds/second);

	ageYear.innerHTML = years
	ageMonth.innerHTML = months
	ageDay.innerHTML = days
	ageHour.innerHTML = hours
	ageSecond.innerHTML = seconds
	ageMiliSecond.innerHTML = miliSeconds;

	document.querySelector('.age-calc').classList.add('expand');
});