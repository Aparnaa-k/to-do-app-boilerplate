//JS code for ToDO App
// Create an array named list to store our to-do activities
// Create a DOM variable  named input to get the to-do activities added from HTML form
//Create a DOM variable todolist ul tag (unordered list)
//Using onlclick to run the click function when button is clicked.

var listOfActivities = [];
var input = document.getElementById("input");
var todolist = document.getElementById("todolist");
document.getElementById("button").onclick = click;


// Adding a to-do activity
// function -> click()
//Using push array operation to add the input todo activity to the list created earlier.
// Giving Empty string to input value after pushing it to array
 // Calling a function showList() to display the todo activities present in the list after addding new element

function click() {
  listOfActivities.push(input.value);
  console.log(listOfActivities);
  input.value = "";
  showList();
 
}

// function -> showList()
//Using innerHTML DOM property to set HTML , giving empty string initially
//To display each to-do activity from the list using innerHTML property.

function showList() {
  todolist.innerHTML = " ";
  listOfActivities.forEach(function (n, i) {
    todolist.innerHTML +=
      "<li>" +
      n +
      "<a onclick='editItem(" +
      i +
      ")'>Edit</a>" +
      "<a onclick='deleteItem(" +
      i +
      ")'>&times | </a></li>";
  });
}

//Deleting an activity
// Using splice array operations to remove one item at specified index
// Display the todo list

function deleteItem(i) {
  listOfActivities.splice(i, 1);
  showList();
}

//Editing an activity
//Using prompt to get the new value of the activty after editing
// Using splice array operation to remove the previous activity and add the new activity
//Display the list

function editItem(i) {
  
  var newValue = prompt("Please insert your new value");
  listOfActivities.splice(i, 1, newValue);
  showList();
}
