/**
 * @jest-environment jsdom
 */

import { addTodoItem } from './addNewItem';
import { removeTask } from './removeTask';
import { displayTodoList } from './displayTodoList';

const inputData = document.querySelector('.todo-item-input');

describe('Test add new todo task', () => {
  test('Adding a new todo task at 1', () => {
    inputData.value = 'todo task1'
    addTodoItem();
    const todoList = readLocalStorage();
    todoList = JSON.parse(todoList);
    expect(todoList.length).toHaveLength(1);
  });

  test('Adding a new todo task at 2', () => {
    inputData.value = 'todo task2'
    addTodoItem();
    const todoList = readLocalStorage();
    todoList = JSON.parse(todoList);
    expect(todoList.length).toHaveLength(2);
  });

  test('Adding a new todo task at 3', () => {
    inputData.value = 'todo task3'
    addTodoItem();
    const todoList = readLocalStorage();
    todoList = JSON.parse(todoList);
    expect(todoList[2].index).toBe(3);
  });

  test('Adding a new todo task at 4', () => {
    inputData.value = 'New text'
    addTodoItem();
    const todoList = readLocalStorage();
    todoList = JSON.parse(todoList);
    expect(todoList[3].description).toBe('New text');
  });
  test('Adding a new todo task at 5', () => {
    inputData.value = 'New text'
    addTodoItem();
    const todoList = readLocalStorage();
    todoList = JSON.parse(todoList);
    expect(todoList[4].completed).toBe(false);
  });
});

describe('Test Remove todo task', () => {
  test('Removing the 6th element', () => {
    removeTask(6, arr);
    expect(arr).toHaveLength(5);
  });
  test('Removing the 3 elements', () => {
    for (let index = 2; index <= 4; index += 1) {
        removeTask(index, arr);
    }
    expect(arr).toHaveLength(3);
  });
  test('Removing the 3rd element', () => {
    removeTask(3, arr);
    expect(arr).toHaveLength(2);
  });
  test('Removing the 2nd element', () => {
    removeTask(2, arr);
    expect(arr[0].description).toBe('newTask1');
  });
  test('Removing the last element', () => {
    removeTask(1, arr);
    expect(arr.length).toBe(0);
  });
});