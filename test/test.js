const assert = require("assert");
const TaskManager = require("./../js/taskManager.js");

// In this step, we'll test some of the methods that exist on our TaskManager class.

// Use what you have learnt on testing to unit test the following methods on the TaskManager class:
// addTask
// deleteTask
// getTaskById
// Add a test case that tests how the TaskManager is initialized, ie: the constructor being called when a new TaskManager() is initialized.

describe("testing TaskManager", () => {
  it("adds an object to the taskManager", () => {
//       // Setup:
    const taskManager = new TaskManager(0);
//       // Exercise:
    taskManager.addTask("shoppping", "At Aldi", "Manoi", "24/01/2021");
    let len = taskManager.tasks.length;
//       // Verify:
assert.strictEqual(len, 1)
//       // Teardown: in hook block at top if possible
    });

  it("deletes task", () =>{
    const taskManager = new TaskManager(0);
    taskManager.addTask("shoppping", "At Aldi", "Manoi", "24/01/2021");
    taskManager.deleteTask(0);
    let tasks = taskManager.tasks.length
    assert.strictEqual(tasks, 0);
    });

    it("get task by id", () => {
      const taskManager = new TaskManager(0);
      newTask = taskManager.addTask("shopping", "At Aldi", "Manoi", "24/01/2021");
      foundTask = taskManager.getTaskById(0)
      newTaskName = "shopping"
      assert.deepStrictEqual(foundTask.name, newTaskName);
    });
  });