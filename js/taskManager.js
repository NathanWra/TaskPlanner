// Create the HTML for a task
const createBucketHtml = (
  id,
  newBucketNameVal,
  newBucketDescriptionVal,
  newBucketAssignedToVal,
  newBucketDueDateVal,
  newBucketStatusVal
) => `
    
      <div role="card">
        <div class="card shadow p2 mb-4 bg m-2">
          <div class="card-body text-justify" background-image: url(fullBucket.webp)">
            <h5 class="card-text">${newBucketNameVal}</h5>
            <h6>${newBucketDescriptionVal}</h6>
            <h6><small>Assigned To: </small>${newBucketAssignedToVal}</h6>
            <div class="d-flex w-100 mb-3 justify-content-between">
              <small>Due: <strong><em>${newBucketDueDateVal}</strong></em></small>
              <small class="badge badge-primary"> ${newBucketStatusVal}</small>
            </div>
            <div class="card-columns-footer">
                  <button
                    type="button"
                    style="color: black(67, 17, 114)"
                    class="close"
                    data-dismiss="card"
                    aria-label="Close"
                    data-button-type="delete"
                    value="${id}"
                  >
                    <i class="fa fa-trash-o"></i>
                  </button>
                  <button
                    type="button"
                    style="color: black(67, 17, 114)"
                    class="close"
                    data-dismiss="card"
                    aria-label="Close"
                    data-button-type="markDone"
                    value="${id}"
                  >
                    <i class="fa fa-check-square-o"></i>
                  </button>
                  <button
                    type="button"
                    style="color: black(67, 17, 114)"
                    class="close"
                    data-toggle="modal"
                    data-target="#editBucket"
                    data-button-type="edit"
                    value="${id}"
                  >
                    <i class="fa fa-edit"></i>
                  </button>
                </div>
          </div>
        </div>
      </div>
`;

// Create a TaskManager class
class BucketManager {
  // Set up the tasks and currentId property in the constructor
  constructor(currentId = 0) {
    this.buckets = [];
    this.currentId = currentId;
  }

  // Create the addTask method
  addBucket(
    newBucketName,
    newBucketDescription,
    newBucketAssignedTo,
    newBucketDueDate
  ) {
    console.log("newBucketName: " + newBucketName);
    console.log("newBucketDescription: " + newBucketDescription);
    console.log("newBucketAssignedTo: " + newBucketAssignedTo);
    console.log("newBucketDueDate: " + newBucketDueDate);
    const bucket = {
      // Increment the currentId property
      id: this.currentId++,
      name: newBucketName,
      description: newBucketDescription,
      assignedTo: newBucketAssignedTo,
      dueDate: newBucketDueDate,
      status: "TODO",
    };

    // Push the task to the tasks property
    this.buckets.push(bucket);
  }

  // function to display the bucket on the browser
  // to render
  displayBucket() {
    const bucketsHtmlList = []; // initialize an array to store the tasks

    // Loops through buckets array objects to store in BucketsHtmlList
    for (let i = 0; i < this.buckets.length; i++) {
      // Get the current task in the loop
      const bucket = this.buckets[i];

      // Format the date
      const date = new Date(bucket.dueDate);
      const formattedDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

      // Pass the task id as a parameter
      const bucketHtml = createBucketHtml(
        // call the function expression creatbucketHtml with parameters
        this.buckets[i].id,
        this.buckets[i].name,
        this.buckets[i].description,
        this.buckets[i].assignedTo,
        formattedDate,
        this.buckets[i].status
      );

      bucketsHtmlList.push(bucketHtml); // push the new bucket values to bucketHtmlList
    }

    //const bucketsHtml = bucketsHtmlList;

    const bucketListDiv = document.querySelector("#bucketListDiv");
    bucketListDiv.innerHTML = bucketsHtmlList;
  }
}

// Create the bucketsHtml by joining each item in the bucketsHtmlList
// with a new line in between each item.
// const bucketsHtml = bucketsHtmlList.join("\n");
