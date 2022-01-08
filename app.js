$(document).ready(function () {

    // Static

    // The first basic method of Moment.js is the moment() method. Use this to get today's info!
    console.log(moment());

    console.log(moment().format());

    // Using moment format, there are different ways that we can display todays date!
    $("#date").text(moment());
    $("#date-formatted").text(moment().format());
    $("#date-my").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

    $("#day-week").text(moment().format('do'));
    $("#day-month").text(moment().format('Do'));
    $("#day-year").text(moment().format('DDDo'))

    // Current Time
    // Here we want to use setInterval to constantly update the time
    let updateTime = function () {
        let currentTime = moment().format('h:mm:ss')
        $("#time").text(currentTime)
    }

    // Here we will get the number of hours in the year
    let updateHour = function () {
        let date = moment().dayOfYear()
        let yearHours = date * 24
        let todayHours = moment().hour();
        let sumHours = yearHours + todayHours
        $("#hours").text(sumHours)
    }

    // Here we will get the number of minutes in the week
    let updateMinutes = function () {
        let date = moment().weekday();
        let weekMinutes = (date * 24 * 60) + (moment().minute());
        $("#minutes").text(weekMinutes);
    }

    // Here we will get the number of seconds in the day
    let updateSeconds = function () {
        let todayHours = moment().hour();
        let todaySeconds = todayHours * 60 * 60;
        let thisSecond = moment().second();
        let sumSeconds = thisSecond + todaySeconds;
        $("#seconds").text(sumSeconds);
    }

    let countdown = function () {

        // Friday
        let friday = moment().day("fr")._d
        
        // convert this into day of the year
        let fridayDate = moment(friday).dayOfYear();

        // This will get the milliseconds of Friday
        let fridayMils = fridayDate * 24 * 60 * 60 * 1000
        // Turn into seconds

        // Today
        // Turn into milliseconds

        let date = moment().dayOfYear()
        let yearMils = date * 24 * 60 * 60 * 1000
        let todayMils = moment().hour() * 60 * 60 * 1000;
        let thisMilsSecond = moment().second() * 1000;
        let thisMils = moment().millisecond();

        // This value should be increasing over time
        let sumMils = yearMils + todayMils + thisMilsSecond + thisMils;

        let ms = fridayMils - sumMils;
        $("#countdown").text(ms)
    }

    // To initally set the times, we will call the functions
    updateTime();
    updateHour();
    updateMinutes();
    updateSeconds();
    countdown();

    // To continuously call the functions, we will use setInterval
    setInterval(updateTime, 1000);
    setInterval(updateHour, 1000);
    setInterval(updateMinutes, 1000);
    setInterval(updateSeconds, 1000);
    setInterval(countdown, 1);


    $('.saveBtn').on("click",function(){
      console.log(this);
    });

  //Stores specific time into the hour containers

  var nineHour =  $("#nine-hour").val("9");
  var tenHour =  $("#ten-hour").val("10");
  var elevenHour = $("#eleven-hour").val("11");
  var twelveHour = $("#twelve-hour").val("12");
  var oneHour = $("#one-hour").val("13"); 
  var twoHour = $("#two-hour").val("14");
  var threeHour = $("#three-hour").val("15");
  var fourHour = $("#four-hour").val("16");
  var fiveHour = $("#five-hour").val("17");
  
  let hourContainer = [
    nineHour, tenHour, elevenHour, twelveHour,
    oneHour, twoHour, threeHour, fourHour, fiveHour
  ]

  //  for(var i=0; i<=hourContainer.length; i++){
  //    console.log(hourContainer[i].val());
  //  }

  var currentHour = moment().format("H");
  console.log(currentHour);
  
  containerColor = function(){
    for(var i=0; i<=hourContainer.length; i++){
      if(hourContainer == currentHour){
        hourContainer[i].addClass("present");
      }else if(hourContainer > currentHour){
        hourContainer[i].addClass("future")
      }else{
        hourContainer[i].addClass("past");
      }
    }
  };

  containerColor();

})