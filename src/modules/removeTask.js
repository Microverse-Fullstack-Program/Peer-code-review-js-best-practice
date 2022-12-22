import readLocalStorage from './storage.js';
import resetIndex from './resetIndex.js';

const todoLists = document.querySelector('.todo-list');
const removeTask = (event) => {
  const todoTask = event.target.parentElement.parentElement;
  const { index } = todoTask.dataset;

  todoLists.removeChild(todoTask);
  if (todoLists.children.length === 0) {
    todoLists.classList.toggle('list-container');
  }

  // Remove todo items
  let todoList = readLocalStorage();
  todoList = todoList.filter((todoTask) => {
    if (todoTask.index !== index) {
      return true;
    }
    return false;
  });
  if (todoList.length > 0) {
    localStorage.setItem('todo_List', JSON.stringify(todoList));
    resetIndex();
  } else {
    window.location.reload();
  }
};

export default removeTask;