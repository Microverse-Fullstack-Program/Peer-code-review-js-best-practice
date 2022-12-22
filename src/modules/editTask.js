import readLocalStorage from './storage.js';

const editTodoTask = (event, taskContainer, OptionBtn, delBtn) => {
  const parent = event.target.parentElement;
  parent.parentElement.classList.add('edit-task');

  const editingTask = document.createElement('input');
  editingTask.type = 'text';
  editingTask.className = 'editing-input';
  const att = document.createAttribute('autofocus');
  att.value = true;
  editingTask.setAttributeNode(att);

  const selectedTask = parent.parentElement.childNodes[0].lastElementChild.childNodes[0];
  const currentTodoTitle = parent.previousElementSibling.lastElementChild;
  currentTodoTitle.removeChild(selectedTask);
  currentTodoTitle.appendChild(editingTask);
  editingTask.value = selectedTask.textContent.trim();
  const editIndex = parent.parentElement.dataset.index;

  editingTask.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      selectedTask.textContent = editingTask.value;

      currentTodoTitle.appendChild(selectedTask);
      currentTodoTitle.removeChild(editingTask);
      taskContainer.classList.remove('edit-task');
      OptionBtn.classList.remove('hide-optionBtn');
      delBtn.classList.remove('show-trash');

      const updateTodoList = readLocalStorage();
      updateTodoList.forEach((todoTask) => {
        if (todoTask.index === editIndex && selectedTask.textContent) {
          todoTask.description = selectedTask.textContent;
        }
      });
      localStorage.setItem('todo_List', JSON.stringify(updateTodoList));
      window.location.reload();
    }
  });
};

export default editTodoTask;