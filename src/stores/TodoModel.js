// import {makeObservable, action} from 'mobx';
import {makeObservable, observable , action} from 'mobx';



export default class TodoModel {
    store
    id
    title
    completed
    
    constructor(store ,title, completed, id){
        this.title = title
        this.completed = completed
        this.id = id
        this.store = store

        makeObservable(this, {
            title: observable,
            completed: observable,
            toggle: action
        })
    
    }

    toggle() {
        this.completed = !this.completed
    }
    
}