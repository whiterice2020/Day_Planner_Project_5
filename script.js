// vars
var tasks = [];
var workHours =[8,9,10,11,12,1,2,3,4,5];
// init ()

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// ✓ The application displays timeblocks for standard business hours (9 a.m. to 5 p.m.).
// ✓ The current day is displayed at the top of the calendar.
// *******moment.js***************


init()

function init() {
    // Get stored tasks from localStorage
    // Parsing the JSON string to an object
    var storedTasks = JSON.parse(localStorage.getItem("tasks"))

    if (storedTasks !== null) {
        tasks = storedTasks;
        
}
}
// Saving Taks to Local Storage
function storedTasks() {
    // Stringify and set "tasks" key in localStorage to tasks array
    // localStorage.setItem("tasks", JSON.stringify(tasks));
    
    
  }

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



$(".saveMe").on("click", function(event) {
    var prevVal = $(this).prev()[0].value;
    // alert("I've been clicked!");
    tasks.push(prevVal)
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // alert("I've been saved!");
    // console.log(prevVal);
    // console.log(tasks);
    
    
    // storedTasks;
  });


//   function init() {
//     // Get stored todos from localStorage
//     // Parsing the JSON string to an object
//     var storedData = JSON.parse(localStorage.getItem("tasks"));
//   }
// WHEN I refresh the page
// THEN the saved events persist
// local storage






// ✓ Repository contains quality README with description, screenshot, link to deployed application
