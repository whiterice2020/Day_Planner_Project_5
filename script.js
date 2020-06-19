// vars
var timeDate = document.querySelector(currentDay)
var saveData = document.querySelector(saveMe)

var dayText = []
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// ✓ The application displays timeblocks for standard business hours (9 a.m. to 5 p.m.).
// ✓ The current day is displayed at the top of the calendar.
// *******moment.js***************




// Current Time Block
$("#currentDay").text(moment().format('ddd MMM Do, YYYY'));
moment().format("YYYY-MM-DD HH:mm");


// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// **********bootstrap rows and columns********************


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// ✓ Each timeblock is color coded to indicate whether it is in a past, present, or future hour.
// ?????


// WHEN I click into a timeblock
// THEN I can enter an event
// ✓ Each timeblock contains an input field and save button.
// on click event
// input field


// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// ✓ Clicking a time block's save button saves the input text to local storage, 
// allowing the text to persist when the application is refreshed.
// Local Storage
function saveData() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("todos", JSON.stringify(todos));
}

$("saveBtn").click(function(event){
    localStorage.getItem("dayText", JSON.stringify(dayText));
})

$(".saveMe").on("click", function() {
    alert("I've been clicked!");
  });


// WHEN I refresh the page
// THEN the saved events persist
// local storage






// ✓ Repository contains quality README with description, screenshot, link to deployed application.
// ```