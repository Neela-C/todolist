import {makeObservable, observable, action, computed} from 'mobx';
// import {makeObservable, action} from 'mobx';
import TodoModel from './TodoModel'

class TodoStore {
    constructor(){
        this.todos = []
        this.flag = 'all'
        this.lastID = 1
        makeObservable(this, {
            todos: observable,
            addTodo : action,
            flag: observable,
            todosLeft: computed,
            printable: computed
        })
    }
    
    
    addTodo(title){
        this.todos.push(new TodoModel(this, title, false, this.lastID ++))
    }


    get todosLeft() {
        return(this.todos.filter(todo => todo.completed === false).length)
    }

    get printable() {

        if (this.flag === 'all'){
            return(this.todos)
        } else if (this.flag === 'active') {
            return(this.todos.filter(todo => todo.completed === false))
        } else if (this.flag === 'completed') {
            return(this.todos.filter(todo => todo.completed === true))
        } else {
            console.log('Printable Error')
        }

    }

}

const store = new TodoStore()
export default store
