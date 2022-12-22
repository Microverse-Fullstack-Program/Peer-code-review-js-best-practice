const readLocalStorage = () => {
  let todoList = localStorage.getItem('todo_List');
  if (todoList === null) {
    todoList = [];
  } else {
    todoList = JSON.parse(todoList);
    localStorage.removeItem('todo_List');
  }
  return todoList;
};

export default readLocalStorage;