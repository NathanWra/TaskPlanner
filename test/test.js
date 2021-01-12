const assert = require("assert");

// In this step, we'll test some of the methods that exist on our TaskManager class.

// Use what you have learnt on testing to unit test the following methods on the TaskManager class:
// addTask
// deleteTask
// getTaskById
// Add a test case that tests how the TaskManager is initialized, ie: the constructor being called when a new TaskManager() is initialized.

describe("taskManager", () => {
  const tasks = ;
  afterEach(() => {
    // hook block to reset after each test 
  });

  it("addTask", () => {
    // Setup:

    // Exercise: 
    // Verify: 
    // Teardown: in hook block at top if possible
  });

  it("deleteTask", () => {
    // Setup:
    // Exercise:
    // Verify:
    // Teardown: in hook block at top if possible
  });

  it("getTaskById", () => {
    // Setup:
    // Exercise:
    // Verify:
    // Teardown: in hook block at top if possible
  });
});
