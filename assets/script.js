$(document).ready(); // This is a function that waits until the entire HTML document
//  has been fully loaded before running the jQuery code inside.

const today = dayjs(); // added today's date using day js
$('#currentDay').text(today.format('MMM D, YYYY'));

const currentHour = Number(today.format('HH')); // having it set to military time to have a value from 1-24

const input = $('.description');
console.log(currentHour)
$(document).ready(function () {
  const hourEl = ['#hour-9', '#hour-10', '#hour-11', '#hour-12', '#hour-13', '#hour-14', '#hour-15', '#hour-16', '#hour-17']

  const hourValues = $.map(hourEl, function (id) { //$.map() to iterate over the hourEl array and extract the hour values from each element ID
    return parseInt(id.match(/\d+/)[0]); // using the match() method along with the regular expression /\d+/ to find the first sequence of digits in each ID
  }); // add parseint to change string into a number
  console.log(typeof hourValues[0]) // therefore, we are able to retrieve values in the array

function updater(){
  const currentHour = Number(today.format('HH')); // having it set to military time to have a value from 1-24
  $.each(hourEl, function (index) { //initiates loop over hourEl and function(id) is a callback loop while 

    var hourID = hourEl[index]; // the hour inside tof the array

    if (hourValues[index] < currentHour) {
      $(hourID).removeClass('present future').addClass('past');
    } else if (hourValues[index] === currentHour) {
      $(hourID).removeClass('past future').addClass('present');
    } else if (hourValues[index] > currentHour) {
      $(hourID).removeClass('past present').addClass('future');
    }
  })}

updater();
setInterval(updater,15000); //updates the page every 15 seconds

  $('.saveBtn').on('click', function () {
    const todayTask = $(this).siblings('.description').val(); //get the value inside of text area
    const hourIdEL = $(this).parent().attr('id'); //target the div that the value was under
    localStorage.setItem(hourIdEL, todayTask); // the information is stored in application
  });


  for (let i = 9; i < 18; i++){
    $("#hour-"+ i + " .description").val(localStorage.getItem("hour-" + i));
  }

});

// const saveBtn = $(".saveBtn");
// saveBtn.on('click', function(){

// })

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?





// using javascript

// Use jQuery add click listener create two variables select textarea and the hour set them in local storage then get them from local storage

// function Goals() {
//   var task = document.querySelector("textarea").textContent.trim();
//   // if (task = "") {
//   //   alert("Please add a task!");
//   //   return;
//   // }
//   console.log(task);
//   var toDO = JSON.parse(localStorage.getItem("task")) || [];
//   toDO.push(task); // Store task and its completion status

//   localStorage.setItem("task", JSON.stringify(toDO));
//   displayTask();
// }

// function displayTask() {
//   var toDO = JSON.parse(localStorage.getItem("task")) || [];
//   var todayTask = document.querySelector(".description");

//   todayTask.innerHTML = '';

//   for (var i = 0; i < toDO.length; i++) {
//     var toDoList = document.createElement('li');

//     todayTask.appendChild(toDoList);
//   }
// }
// console.log(Goals);
// console.log(displayTask);
// console.log(saveTask);

// function saveTask() {
//   var save = document.querySelector(".saveBtn");
//   save.addEventListener('click', Goals);
// }

