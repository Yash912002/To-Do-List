const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//  Add task functionality
function addTask() {
	if (inputbox.value === "") {
		alert("Add the task first");
	} 

  else {
		let li = document.createElement("li");
		li.innerHTML = inputbox.value;
		listContainer.appendChild(li);
    
    // Creating span tag for "CROSS" symbol 
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}

	inputbox.value = "";  
  saveTask();
}

//  Added the functionality of checked, unchecked and delete task
listContainer.addEventListener("click", function(e) {
  if(e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveTask();
  }
  else if(e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveTask();
  }
},false); 

// Stores the task in the browser
function saveTask() {
  localStorage.setItem("data", listContainer.innerHTML);
  localStorage.getItem = "data";
}

// Displays or retrieves the task that stored inside browser
function displayTask() {
  listContainer.innerHTML = localStorage.getItem("data")
}

displayTask();