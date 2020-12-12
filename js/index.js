// Select the New Bucket Form
const newBucketForm = document.querySelector("#newBucketForm");

// Add an 'onsubmit' event listener for new bucket
newBucketForm.addEventListener("submit", (event) => {
  // Prevent default action
  event.preventDefault();

  // Select the inputs for new bucket
  const newBucketNameInput = document.querySelector("#newBucketNameInput");
  const newBucketDescription = document.querySelector("#newBucketDescription");
  const newBucketAssignedTo = document.querySelector("#newBucketAssignedTo");
  const newBucketDueDate = document.querySelector("#newBucketDueDate");
  const newBucketStatus = document.querySelector("#newBucketStatus");
  const errorMessage = document.querySelector("#alertMessage");

  /*
        Validation code here
    */

  // Get the values of the inputs
  const newBucketNameVal = newBucketNameInput.value;
  const newBucketDescriptionVal = newBucketDescription.value;
  const newBucketAssignedToVal = newBucketAssignedTo.value;
  const newBucketDueDateVal = newBucketDueDate.value;
  const newBucketStatusVal = newBucketStatus.value;
  if (!validFormFieldInput(newBucketNameVal)) {
    errorMessage.innerHTML = "Please enter a valid task name";
    errorMessage.style.display = "block";
    newBucketNameInput.style.borderColor = "red";
    newBucketNameInput.focus();
  } else if (!validFormFieldInput(newBucketDescriptionVal)) {
    errorMessage.innerHTML = "Please enter a proper task description";
    errorMessage.style.display = "block";
    newBucketDescription.style.borderColor = "red";
    newBucketDescription.focus();
  } else if (!validFormFieldInput(newBucketAssignedToVal)) {
    errorMessage.innerHTML = "Please enter a person's name";
    errorMessage.style.display = "block";
    newBucketAssignedTo.style.borderColor = "red";
    newBucketAssignedTo.focus();
  } else if (!validFormFieldInput(newBucketDueDateVal)) {
    errorMessage.innerHTML = "Please choose a valid date";
    errorMessage.style.display = "block";
    newBucketDueDate.style.borderColor = "red";
    newBucketDueDate.focus();

    // Comment status for now
  } else if (!validFormFieldInput(newBucketStatusVal)) {
    errorMessage.innerHTML = "Please select one";
    errorMessage.style.display = "block";
    newBucketStatus.style.borderColor = "red";
    newBucketStatus.focus();
  } else {
    errorMessage.innerHTML = "Well Done. Great Job!";
    errorMessage.style.display = "block";
    newBucketNameInput.style.borderColor = "";
    newBucketDescription.style.borderColor = "";
    newBucketAssignedTo.style.borderColor = "";
    newBucketDueDate.style.borderColor = "";
    newBucketStatus.style.borderColor = "";
  }
  // something wrong with the date logic

  // const dateFld = document.getElementById("newBucketDueDate");
  // const todayDt = new Date();
  // const valueDt = dateFld.value.trim() ? new Date(dateFld.value) : null;
  // if (dateFld.value == null || valueDt < todayDt) {
  //   errorMessage.innerHTML = "Invalid due date input";
  //   errorMessage.style.display = "block";
  //   newBucketDueDate.style.borderColor = "red";
  //   newBucketDueDate.focus();
  // } else {
  //   return todayDt;
  // }
});

/**
 * Comment modal for edit form
 */

// Select the Edit Bucket Form
// const editBucketForm = document.querySelector("#newBucketForm");

// Add an 'onsubmit' event listener for editing bucket
// editBucketForm.addEventListener("submit", (event) => {
// Prevent default action
// event.preventDefault();

// Select the inputs for editing bucket
// const editBucketNameInput = document.querySelector("#editBucketNameInput");
// const editBucketDescription = document.querySelector(
//   "#editBucketDescription"
// );
// const editBucketAssignedTo = document.querySelector("#editBucketAssignedTo");
// const editBucketDueDate = document.querySelector("#editBucketDueDate");
// const editBucketStatus = document.querySelector("#editBucketStatus");
// const errorMessage = document.querySelector("#alertMessage");

/*
        Validation code here
    */

// Get the values of the inputs
// const editBucketNameVal = editBucketNameInput.value;
// const editBucketDescriptionVal = editBucketDescription.value;
// const editBucketAssignedToVal = editBucketAssignedTo.value;
// const editBucketDueDateVal = editBucketDueDate.value;
// const editBucketStatusVal = editBucketStatus.value;
//   if (!validFormFieldInput(editBucketNameVal)) {
//     errorMessage.innerHTML = "Invalid name input";
//     errorMessage.style.display = "block";
//     editBucketNameInput.style.borderColor = "red";
//   } else {
//     errorMessage.style.display = "none";
//   }
//   if (!validFormFieldInput(editBucketDescriptionVal)) {
//     errorMessage.innerHTML = "Invalid description input";
//     errorMessage.style.display = "block";
//     editBucketDescription.style.borderColor = "red";
//   } else {
//     errorMessage.style.display = "none";
//   }
//   if (!validFormFieldInput(editBucketAssignedToVal)) {
//     errorMessage.innerHTML = "Invalid assigned to input";
//     errorMessage.style.display = "block";
//     editBucketAssignedTo.style.borderColor = "red";
//   } else {
//     errorMessage.style.display = "none";
//   }
//   if (!validFormFieldInput(editBucketDueDateVal)) {
//     errorMessage.innerHTML = "Invalid due date input";
//     errorMessage.style.display = "block";
//     editBucketDueDate.style.borderColor = "red";
//   } else {
//     errorMessage.style.display = "none";
//   }
// });

// added function to correct blankspace bug

function validFormFieldInput(data) {
  if (data.trim().length === 0) {
    return false;
  } else {
    return true;
  }
}

function validFormFieldInput(data) {
  return data !== null && data !== "";
}
