$(document).ready(function () {
  console.log(moment().format());
  console.log(moment().hours());

  //function to give appropriate greeting for Time of Day
  function timeGreetingText() {
    const timeCheck = moment().hours();
    console.log("This is the timeCheck variable!", timeCheck);
    if (timeCheck < 12) {
      $("#timeGreeting").text("Good Morning!");
    } else if (timeCheck > 12 && timeCheck < 17) {
      $("#timeGreeting").text("Good Afternoon!");
    } else if (timeCheck > 17 && timeCheck < 21) {
      $("#timeGreeting").text("Good Evening!");
    } else {
      $("#timeGreeting").text("Have a Wonderful Night!");
    }
  }
  timeGreetingText();

  function renderTime() {
    const formattedTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#dateTime").text("It is: " + formattedTime);
  }
  renderTime();

  //$(document).ready Closing Brackets
});
