import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import TodoFooter from '../TodoFooter/TodoFooter';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoList from '../TodoList/TodoList';

class App extends React.Component {
    constructor() {
        super();
        this.state = { 
            todos:[]
        }
    }

    addTodo(item) {
        this.state.todos.push(item)
        this.setState({todos: this.state.todos});
    }

    deleteTodo(index) {
        this.state.todos.splice(index,1)
        this.setState({todos: this.state.todos})
    }

    changeTodoState(index, isDone) {
        this.state.todos[index].isDone = isDone;
        this.setState({todos: this.state.todos})
    }

    render() {
        return(
            <div className="todo-wrapper">
                <TodoHeader addTodo={this.addTodo.bind(this)} />
                <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo.bind(this)} changeTodoState={this.changeTodoState.bind(this)} />
                {/* <Footer /> */}
            </div>
        )
    }
}

export default App;
