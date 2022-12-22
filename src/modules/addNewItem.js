import displayTodoList from './displayTodoList.js';
import readLocalStorage from './storage.js';

const inputData = document.querySelector('.todo-item-input');
const addTodoItem = () => {
  if (inputData.value) {
    const todoList = readLocalStorage();
    const newItem = {};
    newItem.description = inputData.value;
    newItem.completed = false;
    newItem.index = (todoList.length + 1).toString();
    todoList.push(newItem);
    localStorage.setItem('todo_List', JSON.stringify(todoList));
    inputData.value = '';
    displayTodoList(newItem);
  }
};

export default addTodoItem;