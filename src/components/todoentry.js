import React, {Component} from 'react';
import Todostore from '../stores/TodoStore'
class TodoEntry extends Component {
    onToggle= () => {
        this.props.todo.toggle()
    }
    state = {
        value:''
    };
    handleKeyDown = event =>{
        if(event.keyCode!== 13){
            return;
        }
        event.preventDefault()
        Todostore.addTodo(this.state.value)
        this.setState({
            value: ''
          })
    }

    render(){
        return(
            <div>
                <header className="header">
				<h1>todo list</h1>
                <input
                    value={this.state.value}
                    onChange={event => this.setState({value: event.target.value})}
                    onKeyDown={
                        event => this.handleKeyDown(event)
                    }
                    type="text"
                    className="new-todo"
                    placeholder="What needs to be done?"
                    />
			</header>
            </div>
        )
    }
}

export default TodoEntry