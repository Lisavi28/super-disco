
  //Assign date
  
  $("#currentDay").text(moment().format("MMMM, dddd Do"));

  //declaration variables of tasks

  var tasks = [];


$(document).ready(function() {
 
  // save button function call
  $(".saveBtn").on("click",function() {
    var taskdesc = $(this).siblings(".task").val();
    var taskTimed = $(this).siblings(".timed").text();
    //console.log(taskdesc)
   // console.log(taskTimed)

    if (taskdesc && taskTimed) {
  
       tasks.push({text: taskdesc, time: taskTimed});
        saveTasks();
      }
  });
 
 var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};


  // retrieve data from local storage and show it

var storedtasks = JSON.parse(localStorage.getItem("tasks"));

if (storedtasks !== null) {
  events = storedtasks;
//  console.log(events)
}

//loop

for(var i = 0; i < events.length; i++) {
  var userDescription = "";

  var userDescription = events[i].text;
  console.log(userDescription);
  console.log(events[i].time.split(":")[0]);

  $("#" + events[i].time.split(":")[0]).text(userDescription);
}

function indicationsTasks() {
  // convert time to a number
  var timeNow = moment().hours();
  
  
  // time blocks
  $(".task").each(function() {
    var blockHour = parseInt($(this).attr("id"));
    console.log(blockHour)

   //add class past
    if(timeNow > blockHour) {
      $(this).addClass("past");
    }
    //add class present
    else if(timeNow === blockHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    }
    //add class future
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
    
  });
}
indicationsTasks();
})
