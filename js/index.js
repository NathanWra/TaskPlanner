// Outside the class, create an instance of TaskManager
const taskManager = new TaskManager(0);

// Load the tasks from localStorage
taskManager.load();

// Render the tasks to the page
taskManager.render();

// Select the New Bucket/Task Form
const newTaskForm = document.querySelector("#newTaskForm");

// Add an 'onsubmit' event listener for new bucket/task
newTaskForm.addEventListener("submit", (event) => {
  // Prevent default action
  event.preventDefault();

  // Select the inputs for new bucket/task
  const newTaskNameInput = document.querySelector("#newTaskNameInput");
  const newTaskDescription = document.querySelector("#newTaskDescription");
  const newTaskAssignedTo = document.querySelector("#newTaskAssignedTo");
  const newTaskDueDate = document.querySelector("#newTaskDueDate");
  const newDateToday = new Date();
  const errorMessage = document.querySelector("#alertMessage");

  /*
        Validation code here
    */

  // Get the values of the inputs
  const name = newTaskNameInput.value;
  const description = newTaskDescription.value;
  const assignedTo = newTaskAssignedTo.value;
  const dueDate = newTaskDueDate.value.trim()
    ? new Date(newTaskDueDate.value)
    : null;

  // Alert for the validity of the input values
  if (!validFormFieldInput(name)) {
    errorMessage.innerHTML = "Please enter a valid task name.";
    errorMessage.style.color = "red";
    errorMessage.style.display = "block";
    newTaskNameInput.style.borderColor = "red";
    newTaskNameInput.focus();
  } else if (!validFormFieldInput(description)) {
    errorMessage.innerHTML = "Please enter a proper task description.";
    errorMessage.style.color = "red";
    errorMessage.style.display = "block";
    newTaskDescription.style.borderColor = "red";
    newTaskDescription.focus();
  } else if (!validFormFieldInput(assignedTo)) {
    errorMessage.innerHTML = "Please enter a person's name.";
    errorMessage.style.color = "red";
    errorMessage.style.display = "block";
    newTaskAssignedTo.style.borderColor = "red";
    newTaskAssignedTo.focus();
  } else if (newTaskDueDate.value == null || dueDate < newDateToday) {
    errorMessage.innerHTML = "Please choose a valid date.";
    errorMessage.style.color = "red";
    errorMessage.style.display = "block";
    newTaskDueDate.style.borderColor = "red";
    newTaskDueDate.focus();
  } else {
    errorMessage.innerHTML = "Well Done. Great Job!";
    errorMessage.style.color = "green";
    errorMessage.style.display = "block";
    newTaskNameInput.style.borderColor = "";
    newTaskDescription.style.borderColor = "";
    newTaskAssignedTo.style.borderColor = "";
    newTaskDueDate.style.borderColor = "";

    taskManager.addTask(name, description, assignedTo, dueDate);

    // Save the tasks to localStorage
    taskManager.save();

    // Render the tasks
    taskManager.render();
    $("#newTask").modal("hide");

    newTaskNameInput.value = "";
    newTaskDescription.value = "";
    newTaskAssignedTo.value = "";
    newTaskDueDate.value = "";
  }
});

// Select the Tasks List
const tasksList = document.querySelector("#tasksList");

// Add an 'onclick' event listener to the Tasks List
tasksList.addEventListener("click", (event) => {
  // Check if a "Mark As Done" button was clicked
  if (event.target.classList.contains("done-button")) {
    // Get the parent Task
    const parentTask =
      event.target.parentElement.parentElement.parentElement.parentElement;

    // Get the taskId of the parent Task.
    const taskId = Number(parentTask.dataset.taskId);

    // Get the task from the TaskManager using the taskId
    const task = taskManager.getTaskById(taskId);

    // Update the task status to 'DONE'
    task.status = "DONE";

    // Save the tasks to localStorage
    taskManager.save();

    // Render the tasks
    taskManager.render();
  }
  // Check if a "Delete" button was clicked
  if (event.target.classList.contains("delete-button")) {
    const parentTask =
      event.target.parentElement.parentElement.parentElement.parentElement;

    const taskId = Number(parentTask.dataset.taskId);

    // Delete the task
    taskManager.deleteTask(taskId);

    // Save the tasks to localStorage
    taskManager.save();

    // Render the tasks
    taskManager.render();
  }
});

function validFormFieldInput(data) {
  if (data.trim().length === 0) {
    return false;
  } else {
    return true;
  }
}

console.log(taskManager);
