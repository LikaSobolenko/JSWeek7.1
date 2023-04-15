const task = document.getElementById("task");
const list = document.querySelector("div.list");

//Функция добавления задачи в список
function putTask() {
  //Контейнер для задачи
  let taskContainer = document.createElement("div");
  taskContainer.className = `task_Container`;
  list.appendChild(taskContainer);
  //Чекбокс
  let newCheckBox = document.createElement("input");
  newCheckBox.type = "checkbox";
  newCheckBox.className = "checkbox";
  taskContainer.appendChild(newCheckBox);
  //Текст задачи
  let newTask = document.createElement("span");
  newTask.className = "tasks";
  newTask.textContent = task.value;
  taskContainer.appendChild(newTask);
  //Кнопка удаления
  let newDeletButton = document.createElement("button");
  newDeletButton.textContent = "x";
  newDeletButton.className = "delet_task";
  taskContainer.appendChild(newDeletButton);
  //Функция удаления одной таски
  newDeletButton.addEventListener("click", function () {
    newDeletButton.parentElement.remove();
  });

  //Проверка кнопки удаления всего
  checkDeletAllButton();
}

//Функция активации кнопки удаления всего списка

function checkDeletAllButton() {
  if (document.getElementById("list").innerHTML) {
    document.querySelector("#deletAll").disabled = false;
  }
}

//Функция для удаления всего списка
function clearAll() {
  document.getElementById("list").innerHTML = "";
  document.querySelector("#deletAll").disabled = true;
}
