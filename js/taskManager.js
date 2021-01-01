// Add an data-task-id attribute to each task

const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => `
    <div role="card" data-task-id=${id}>
      <div class="card shadow p2 mb-4 bg m-2">
        <div class="card-body text-justify">
          <h5 class="card-text">${name}</h5>
          <h6>${description}</h6>
          <h6><small>Assigned To: </small>${assignedTo}</h6>
        
          <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Due: <strong><em>${dueDate}</strong></em></small>
            <small class="badge ${
              status === "TODO" ? "badge-primary" : "badge-success"
            }">${status}</small>
          </div>

          <div class="d-flex w-100 justify-content-end">
            
            <button 
              type="button"
              style="color: black(67, 17, 114)"
              data-button-type="markDone"
              class="i fa fa-check close done-button ${
                status === "TODO" ? "visible" : "invisible"
              }" 
            >
            </button>
            
            <button
                type="button"
                style="color: black(67, 17, 114)"
                class="close"
                data-toggle="modal"
                data-target="#editTask"
                data-button-type="edit"
                value="${id}"
            >
                <i class="fa fa-edit"></i>
            </button>
             
            <button
                type="button"
                style="color: black(67, 17, 114)"
                class="close delete"
                data-dismiss="card"
                aria-label="close"
                data-button-type="delete"
                value="${id}"
            >
                <i class="fa fa-trash-o"></i>
            </button>
          </div>
        </div>  
      </div>  
    </div>
`;

// Create a TaskManager class
class TaskManager {
  // Set up the tasks and currentId property in the constructor
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  // Create the addTask method
  addTask(name, description, assignedTo, dueDate) {
    const task = {
      // Increment the currentId property
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: "TODO",
    };

    // Push the task to the tasks property
    this.tasks.push(task);
  }

  getTaskById(taskId) {
    // Create a variable to store the found task
    let foundTask;

    // Loop over the tasks and find the task with the id passed as a parameter
    for (let i = 0; i < this.tasks.length; i++) {
      // Get the current task in the loop
      const task = this.tasks[i];

      // Check if its the right task by comparing the task's id to the id passed as a parameter
      if (task.id === taskId) {
        // Store the task in the foundTask variable
        foundTask = task;
      }
    }

    // Return the found task
    return foundTask;
  }

  // function to display the bucket on the browser
  render() {
    const tasksHtmlList = [];

    // Loops through tasks array objects to store in tasksHtmlList
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i]; // initialize an array to store the tasks

      // Format the date
      const date = new Date(task.dueDate);
      const formattedDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

      // Pass the task id as a parameter
      const taskHtml = createTaskHtml(
        // call the function expression creattaskHtml with parameters
        task.id,
        task.name,
        task.description,
        task.assignedTo,
        formattedDate,
        task.status
      );

      tasksHtmlList.push(taskHtml); // push the new task values to taskHtmlList
    }

    const tasksHtml = tasksHtmlList.join("\n");

    const tasksList = document.querySelector("#tasksList");
    tasksList.innerHTML = tasksHtml;
  }
}
