// vars
var tasks = [];
var workHours =[8,9,10,11,12,1,2,3,4,5];



init()

function init() {
  // Get stored tasks from localStorage
  // Parsing the JSON string to an object
  var storedTasks = JSON.parse(localStorage.getItem("tasks"))

  console.log("init with tasks:")
  console.log(storedTasks) 

  if (storedTasks !== null) {

    tasks = storedTasks; 
  }
}
//   task.forEach(function(task) {
//     // find the element with the id  of 'description-" + task id"

//     //update its value with task.description
//   });

//   //Go through each task. get the id from the task, update that description box with the task.
// }


// Saving Taks to Local Storage
function storedTasks() {
    // Stringify and set "tasks" key in localStorage to tasks array
    // localStorage.setItem("tasks", JSON.stringify(tasks));
    
    
  }

// Current Time Block
$("#currentDay").text(moment().format('ddd MMM Do, YYYY'));
moment().format("YYYY-MM-DD hh:mm");


// ✓ Each timeblock is color coded to indicate whether it is in a past, present, or future hour.

// RowColorUpdate
// var row = document.querySelector(".row");
var currentTime = moment().hours();
 
    
  



// Click event for save button which saves to local storage
$(".saveMe").on("click", function(event) {
    var description = $(this).prev()[0].value;
    var hour = $(this).attr('id');
    console.log("hour" + hour);

    var task = {}
    task[hour] = description

    tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks)
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
