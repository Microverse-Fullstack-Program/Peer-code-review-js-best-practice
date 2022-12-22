import './style.css';
import addTodoItem from './modules/addNewItem.js';
import displayTodoList from './modules/displayTodoList.js';
import removeAllCheckedItem from './modules/removeAllSelected.js';

const form = document.querySelector('.form');
const clearBtn = document.querySelector('.clear-btn');

// Add new todo list on form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodoItem();
});

// Remove all selected items and reset index
clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  removeAllCheckedItem();
});

window.addEventListener('DOMContentLoaded', () => {
  let todoList = localStorage.getItem('todo_List');
  if (todoList) {
    todoList = JSON.parse(todoList);
    todoList.forEach(displayTodoList);
  }
});
