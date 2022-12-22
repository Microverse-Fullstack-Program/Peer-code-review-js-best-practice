import readLocalStorage from './storage.js';

const resetIndex = () => {
  const todoList = readLocalStorage();

  // Reset index of exist todo tasks
  const newList = [];
  todoList.forEach((todoTask) => {
    const newTodoItem = { ...todoTask, index: (newList.length + 1).toString() };
    newList.push(newTodoItem);
  });
  localStorage.setItem('todo_List', JSON.stringify(newList));
  window.location.reload();
};

export default resetIndex;
