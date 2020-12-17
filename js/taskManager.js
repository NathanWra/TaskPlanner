// Create the HTML for a task
const createBucketHtml = (
  newBucketNameVal,
  newBucketDescriptionVal,
  newBucketAssignedToVal,
  newBucketStatusVal,
  newBucketDueDateVal
) => `
    <li class="list-group-item">
      <div class="card shadow p2 mb-4 bg m-2">
        <div class="card-body text-justify" background-image: url(fullBucket.webp)">
          <h5 class="card-text">${newBucketNameVal}</h5>
          <h6>${newBucketDescriptionVal}</h6>
          <h6>${newBucketAssignedToVal}</h6>
          <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Due: ${newBucketDueDateVal}</small>
            <small class="badge badge-danger">${newBucketStatusVal}</small>
          </div>
        </div>
      </div>
    </li>
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
    const bucket = {
      // Increment the currentId property
      id: this.currentId++,
      newBucketName,
      newBucketDescription,
      newBucketAssignedTo,
      newBucketDueDate,
      newBucketStatus: "TODO",
    };

    // Push the task to the tasks property
    this.buckets.push(bucket);
  }

  // function to display the bucket on the browser
  // to render
  displayBucket() {
    const BucketsHtmlList = []; // initialize an array to store the tasks

    // Loops through buckets array objects to store in BucketsHtmlList
    for (let i = 0; i < this.buckets.length; i++) {
      // Get the current task in the loop
      const bucket = this.buckets[i];

      // Format the date
      const date = new Date(task.dueDate);
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
const bucketsHtml = bucketsHtmlList.join("\n");
