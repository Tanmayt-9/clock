$(document).ready(function() {
    function displayTime(){
        var currentTime = new Date();
        var day = currentTime.getDay();
        var month = currentTime.getMonth();
        var date = currentTime.getDate();
        var year = currentTime.getFullYear();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridium = 'AM';
        var dayString;

        if(seconds < 10){
            seconds = '0' + seconds;
        }
        
        switch(day){
            case 1:
                dayString = 'Monday';
                break;
            case 2:
                dayString = 'Tuesday';
                break;
            case 3:
                dayString = 'Wednesday';
                break;
            case 4:
                dayString = 'Thursday';
                break;
            case 5:
                dayString = 'Friday';
                break;
            case 6:
                dayString = 'Saturday';
                break;
            case 0:
                dayString = 'Sunday';
                break;
        }

        switch(month){
            case 0:
                monthString = 'JAN';
                break;
            case 1:
                monthString = 'FEB';
                break;
            case 2:
                monthString = 'MAR';
                break;
            case 3:
                monthString = 'APR';
                break;
            case 4:
                monthString = 'MAY';
                break;
            case 5:
                monthString = 'JUN';
                break;
            case 6:
                monthString = 'JUL';
                break;
            case 7:
                monthString = 'AUG';
                break;
            case 8:
                monthString = 'SEPT';
                break;
            case 9:
                monthString = 'OCT';
                break;
            case 10:
                monthString = 'NOV';
                break;
            case 11:
                monthString = 'DEC';
                break;
        }

        if(hours > 12){
            hours = hours -12;
            meridium = 'PM';
        }
        if(hours === 0){
            hours = 12;
        }

        //this is used to handle the id clock in html
        var dateDiv = document.getElementById('date');
        var clockDiv = document.getElementById('clock');
        var dayDiv = document.getElementById('day');

        dayDiv.innerText = dayString;
        //then we set the innertext i.e, hours minutes in the id mentioned in the html
        clockDiv.innerText = hours +':'+ minutes +':' + seconds + ' ' + meridium;

        dateDiv.innerText = monthString + " " + date + " " + " " + year;
     }

     displayTime();
     setInterval(displayTime, 1000);
});
