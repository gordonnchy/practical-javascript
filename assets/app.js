"use strict";
class Todo {
  description;

  constructor(description) {
    this.description = description;
  }

  store() {

  }

  edit() {

  }

  remove() {

  }

  restore() {

  }

  schedule() {

  }
}

function addTodo() {
   let myTodo = new Todo(document.querySelector("#todo-input").value ? document.querySelector("#todo-input").value : 'default');

   console.log(myTodo.description);
}