import readLocalStorage from './storage.js';
import editTodoTask from './editTask.js';
import removeTask from './removeTask.js';

const todoItems = document.querySelector('.todo-list');
const displayTodoList = (listElement) => {
  // Create to-do item container
  const divElement = document.createElement('div');
  divElement.classList.add('list-item');
  const attr = document.createAttribute('data-index');
  attr.value = listElement.index;
  divElement.setAttributeNode(attr);
  todoItems.insertBefore(divElement, todoItems.firstElementChild);

  // Create checkbox and todo-tasks title container
  const todoTitle = document.createElement('div');
  todoTitle.classList.add('todo-desc');
  divElement.appendChild(todoTitle);

  // Add checkbox input
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('checkBtn');
  todoTitle.appendChild(checkbox);

  // Create container for todo tasks title
  const newItem = document.createElement('div');
  newItem.classList.add('todoTitle');
  newItem.innerHTML = `<p> ${listElement.description} </p>`;
  todoTitle.appendChild(newItem);

  // Add icons for todo Tasks
  const iconContainer = document.createElement('div');
  iconContainer.classList.add('icons');
  iconContainer.innerHTML = `<i class="fa-solid fa-ellipsis-vertical"></i>
        <i class="fa-solid fa-trash-clock fa-trash"></i>`;
  divElement.appendChild(iconContainer);

  // Add event listener for checkbox
  const checkboxes = document.querySelectorAll('.checkBtn');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      const todoTaskTitle = e.target.nextElementSibling.childNodes[0];
      const todoTaskContainer = e.target.parentElement.parentElement;
      const { index } = todoTaskContainer.dataset;
      const todoListList = readLocalStorage();
      if (checkbox.checked === true) {
        todoTaskTitle.style.textDecoration = 'line-through';
        todoListList.filter((todoTask) => {
          if (todoTask.index === index) {
            todoTask.completed = true;
          }
          return false;
        });
      } else {
        todoTaskTitle.style.textDecoration = 'none';
        todoListList.filter((todoTask) => {
          if (todoTask.index === index) {
            todoTask.completed = false;
          }
          return false;
        });
      }
      localStorage.setItem('todo_List', JSON.stringify(todoListList));
    });
  });

  // Add event listener to icons
  const optionBtn = document.querySelectorAll('.fa-ellipsis-vertical');
  const deleteBtn = document.querySelectorAll('.fa-trash');
  optionBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      btn.classList.add('hide-optionBtn');
      const delBtn = e.target.nextElementSibling;
      delBtn.classList.add('show-trashBtn');
      editTodoTask(e, divElement, btn, delBtn);
    });
  });

  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      removeTask(e);
    });
  });
};

export default displayTodoList;
