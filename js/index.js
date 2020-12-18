//outside the class, create an instance of TaslManager
const bucketManager = new BucketManager();

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
  const newBucketDueDate = document.getElementById("newBucketDueDate");
  const newBucketDateToday = new Date();
  // const newBucketStatus = document.querySelector("#newBucketStatus");
  const errorMessage = document.querySelector("#alertMessage");

  /*
        Validation code here
    */

  // Get the values of the inputs
  const newBucketNameVal = newBucketNameInput.value;
  const newBucketDescriptionVal = newBucketDescription.value;
  const newBucketAssignedToVal = newBucketAssignedTo.value;
  // const newBucketStatusVal = newBucketStatus.value;
  const newBucketDueDateVal = newBucketDueDate.value.trim()
    ? new Date(newBucketDueDate.value)
    : null;

  if (!validFormFieldInput(newBucketNameVal)) {
    errorMessage.innerHTML = "Please enter a valid task name.";
    errorMessage.style.color = "red";
    errorMessage.style.display = "block";
    newBucketNameInput.style.borderColor = "red";
    newBucketNameInput.focus();
  } else if (!validFormFieldInput(newBucketDescriptionVal)) {
    errorMessage.innerHTML = "Please enter a proper task description.";
    errorMessage.style.color = "red";
    errorMessage.style.display = "block";
    newBucketDescription.style.borderColor = "red";
    newBucketDescription.focus();
  } else if (!validFormFieldInput(newBucketAssignedToVal)) {
    errorMessage.innerHTML = "Please enter a person's name.";
    errorMessage.style.color = "red";
    errorMessage.style.display = "block";
    newBucketAssignedTo.style.borderColor = "red";
    newBucketAssignedTo.focus();
  } else if (
    newBucketDueDate.value == null ||
    newBucketDueDateVal < newBucketDateToday
  ) {
    errorMessage.innerHTML = "Please choose a valid date.";
    errorMessage.style.color = "red";
    errorMessage.style.display = "block";
    newBucketDueDate.style.borderColor = "red";
    newBucketDueDate.focus();
    // } else if (!validFormFieldInput(newBucketStatusVal)) {
    //   errorMessage.innerHTML = "Please select one.";
    //   errorMessage.style.color = "red";
    //   errorMessage.style.display = "block";
    //   newBucketStatus.style.borderColor = "red";
    //   newBucketStatus.focus();
  } else {
    errorMessage.innerHTML = "Well Done. Great Job!";
    errorMessage.style.color = "green";
    errorMessage.style.display = "block";
    newBucketNameInput.style.borderColor = "";
    newBucketDescription.style.borderColor = "";
    newBucketAssignedTo.style.borderColor = "";
    newBucketDueDate.style.borderColor = "";
    // newBucketStatus.style.borderColor = "";
  }

  bucketManager.addBucket(
    newBucketNameVal,
    newBucketDescriptionVal,
    newBucketAssignedToVal,
    newBucketDueDateVal
    // newBucketStatusVal
  );

  // Render the tasks
  bucketManager.displayBucket();
  $("#newBucket").modal("hide");

  newBucketNameInput.value = "";
  newBucketDescription.value = "";
  newBucketAssignedTo.value = "";
  newBucketDueDate.value = "";
  // newBucketStatus.value = "";
});

function validFormFieldInput(data) {
  if (data.trim().length === 0) {
    return false;
  } else {
    return true;
  }
}

console.log(bucketManager);
