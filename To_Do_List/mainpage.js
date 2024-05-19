document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const completedTaskList = document.getElementById("completedTaskList");

    addTaskBtn.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
      }
    });

    function addTask(taskText) {
      const li = document.createElement("li");
      li.className = "list-group-item task-item";
      li.innerHTML = `
        <span>${taskText}</span>
        <div>
          <button class="btn btn-success btn-sm me-1 complete-btn">Complete</button>
          <button class="btn btn-danger btn-sm delete-btn">Delete</button>
        </div>
      `;
      taskList.appendChild(li);

      const completeBtn = li.querySelector(".complete-btn");
      completeBtn.addEventListener("click", function() {
        moveTaskToCompleted(li);
      });

      const deleteBtn = li.querySelector(".delete-btn");
      deleteBtn.addEventListener("click", function() {
        li.remove();
      });
    }

    function moveTaskToCompleted(taskElement) {
      const taskText = taskElement.querySelector("span").innerText;
      const li = document.createElement("li");
      li.className = "list-group-item task-item";
      li.innerHTML = `
        <span>${taskText}</span>
        <div>
          <button class="btn btn-danger btn-sm delete-btn">Delete</button>
        </div>
      `;
      completedTaskList.appendChild(li);

      const deleteBtn = li.querySelector(".delete-btn");
      deleteBtn.addEventListener("click", function() {
        li.remove();
      });

      taskElement.remove();
    }
  });
