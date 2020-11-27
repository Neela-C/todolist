import React, { Component } from "react";

import TodoItem from "./todoitem";
import todoStore from "../stores/TodoStore";

import { observer } from "mobx-react";

class TodoFooter extends Component {

  clearCompletedTodos() {
    todoStore.todos = todoStore.todos.filter(todo => todo.completed === false)
  }

  showAll() {
    document.getElementById("all").setAttribute('class', 'selected')
    document.getElementById("active").setAttribute('class', '')
    document.getElementById("completed").setAttribute('class', '')

    todoStore.flag = 'all'


  }

  showActives() {
    document.getElementById("all").setAttribute('class', '')
    document.getElementById("active").setAttribute('class', 'selected')
    document.getElementById("completed").setAttribute('class', '')

    todoStore.flag = 'active'

  }

  showCompleted() {
    document.getElementById("all").setAttribute('class', '')
    document.getElementById("active").setAttribute('class', '')
    document.getElementById("completed").setAttribute('class', 'selected')


    todoStore.flag = 'completed'

  }


  render() {


        if (todoStore.todos.length === 0) {
            return(
                <div></div>
            )
            
        }
        else {
            return(
                <footer className="footer">
                <span className="todo-count">
                  <strong>{todoStore.todosLeft}</strong> item left
                </span>
        
                <ul className="filters">
                  <li>
                    <a className="selected" id="all" href="#/" onClick={this.showAll}>
                      All
                    </a>
                  </li>
                  <li>
                    <a href="#/" id="active" onClick={this.showActives}>
                      Active
                      </a>
                  </li>
                  <li>
                    <a href="#/" id="completed" onClick={this.showCompleted}>
                      Completed
                      </a>
                  </li>
                </ul>
        
                <button className="clear-completed"  onClick={this.clearCompletedTodos}>Clear completed</button>
              </footer>
            )
        }

  }
}

TodoFooter = observer(TodoFooter);

export default TodoFooter;