
import './App.css';
import {observer} from "mobx-react";
import TodoEntry from './components/todoentry'
import TodoItems from './components/todoitems'
import TodoFooter from './components/todofooter'

function App() {
  return (
    <div  className="App">
		
		<div id="todoapp" className="todoapp">
		    <TodoEntry/>
      	<TodoItems/>
        <TodoFooter />
			</div>	
    </div>
  );
}



export default App;
