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
            todos:[],
            show: 'All',
        }
    }

    addTodo(item) {
        this.state.todos.push(item);
        this.setState({todos: this.state.todos});
    }

    deleteTodo(index) {
        this.state.todos.splice(index,1);
        this.setState({todos: this.state.todos});
    }

    changeTodoState(index, isDone) {
        this.state.todos[index].isDone = isDone;
        this.setState({todos: this.state.todos});
    }

    clearDone() {
        let todos = this.state.todos.filter(todo => !todo.isDone);
        this.setState({todos: todos});
    }

    show(showWhat){
        this.setState({show: showWhat});
    }

    render() {
        let todoCount = this.state.todos.length;
        let todoDoneCount = this.state.todos.filter((todo) => todo.isDone).length;
        // debugger;
        let todoLeftCount = todoCount - todoDoneCount || 0;
        return(
            <div className="todo-wrapper">
                <TodoHeader addTodo={this.addTodo.bind(this)} />
                <TodoList todos={this.state.todos} show={this.state.show} 
                    deleteTodo={this.deleteTodo.bind(this)} changeTodoState={this.changeTodoState.bind(this)} />
                <TodoFooter todoLeftCount={todoLeftCount} clearDone={this.clearDone.bind(this)} show={this.show.bind(this)} /> 
            </div>
        )
    }
}

export default App;
