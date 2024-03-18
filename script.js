document.addEventListener("DOMContentLoaded", function () {
  const inputBox = document.getElementById("input-box");
  const tasks = document.getElementById("list");
  const remove = document.getElementById("remove");

  function addTask(event) {
    event.preventDefault(); // Prevent form submission

    if (inputBox.value.trim() !== "") {
      remove.remove();
      let li = document.createElement("li");

      const checkBtn = document.createElement("button");
      checkBtn.className = "checkBtn"; // Corrected class name
      checkBtn.innerHTML = '<i class="fa-regular fa-circle"></i>';

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "deleteBtn"; // Corrected class name
      deleteBtn.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';

      li.appendChild(checkBtn);
      li.appendChild(document.createTextNode(inputBox.value.trim()));
      li.appendChild(deleteBtn);

      tasks.appendChild(li);

      inputBox.value = "";
    }
  }

  const addButton = document.getElementById("addTaskBtn");
  addButton.addEventListener("click", addTask);
});


