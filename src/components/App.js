import React from "react"
import { truncate } from "fs";

// const todos = [
//     {
//          description: 'buy apples',
//          isDone:false
//     },
//     {
//         description: 'buy oranges',
//         isDone:true
//     }
// ]
class App extends React.Component {
    state = {
        todos: [
            {
                description: 'buy apples',
                isDone: false
            },
            {
                description: 'buy oranges',
                isDone: true
            },
        ],
        newTodoDescription:"",
        
    };

    handleOnchange = event => {
        const {name, value} = event.target;
        // same as nameTodoDescription:value,
        //=[name]: value, 
        this.setState({
            [name]:value,
        });
    }
    
    // handleTodoClick = event => {
    //     alert("you clicked a todo!");

    handleTodoClick = (currentTodo) => {
        if (currentTodo.isDone) {
            currentTodo.isDone = false;
        } else {
            currentTodo.isDone = true;
        }
        const updatedState = {
            todos: this.state.todos
        }
        this.setState(updatedState);
    };

    handleAddTodo = () => {
        //step 1: get new todo description
        const newTodoDescription= this.state.newTodoDescription 
        //step 2: create new todo object from the description
        const newTodo = {
            description:newTodoDescription, 
            isDone:false,
        }
        //step 3: update react component state)
        const newTodos =[...this.state.todos,
        newTodo, 
        ];
        this.setState({
            todos:newTodos,
        });
    };

    render() {
        return (
            <div>
                <h1> My awesome todo list </h1>
                <label htmlFor="newTodoDescription">Add Todo</label>
                <input 
                type="text" 
                value={this.state.newTodoDescription}
                name="newTodoDescription"
                id="newTodoDescription"
                onChange={this.handleOnchange}
                />
                <button onClick={this.handleAddTodo}>+</button> 
                <ul>
                    {this.state.todos.map(todo => {
                        let completeClass = "";
    //toggle the state to not done, otherwise set it to true.
                        if (todo.isDone) {
                            completeClass = "complete";
                        }
                        return <li
                            className={completeClass}
                            onClick={() => this.handleTodoClick(todo)}
                        >
                            {todo.description}</li>

                    })}
                </ul>
            </div>
    )}
} 
//alternative shorter function of toggle state. 
//currentTodo.isDone =!currentTodo.isDone;
//const updatedState ={
// todos:this/state.todos
//this.setState(updatedState);
export default App;