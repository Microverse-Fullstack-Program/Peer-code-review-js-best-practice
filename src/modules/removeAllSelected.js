import readLocalStorage from './storage.js';
import resetIndex from './resetIndex.js';

const removeAllCheckedItem = () => {
  let todoList = readLocalStorage();

  // Remove all checked todo items
  todoList = todoList.filter((todoTask) => {
    if (todoTask.completed !== true) {
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

export default removeAllCheckedItem;
