$('.saveBtn').on("click",function(){
  console.log(this);
  //save user input to corresponding container
  var userText = $(this).siblings(".userInput").val();
  var userTime = $(this).parent().attr("id");

  localStorage.setItem(userText, userTime);
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
  

// Set class value into an array
let hourContainer = [
  nineHour, tenHour, elevenHour, twelveHour,
  oneHour, twoHour, threeHour, fourHour, fiveHour
]

  //  for(var i=0; i<=hourContainer.length; i++){
  //    console.log(hourContainer[i].val());
  //  }

  // setting current timer
var currentHour = moment().format("H");
console.log(currentHour);
//compares current time to container times and adds color respectively 
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

//Displays current Time
var currentTime = function(){
  document.getElementById("currentDay").innerHTML =
  moment().format("MM/D/YYYY, h:m:ss");
  } 
setInterval(currentTime,1000);

currentTime();
containerColor();
