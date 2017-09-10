import React from 'react'
import ReactDOM from 'react-dom'
import { Input } from 'antd'
import './TodoHeader.css'

class TodoHeader extends React.Component {
    handlerKeyUp(e) {
        if(e.keyCode === 13) {
            let value = e.target.value;
            if(!value) return false;
            let newTodoItem = {
                text: value,
                isDone: false,
            };
            e.target.value = '';
            this.props.addTodo(newTodoItem);
        }
    }

    render () {
        return (
            <div className="todo-header">
                <div className="todo-title">
                    <h1>todos</h1>
                </div>
                <input onKeyUp={this.handlerKeyUp.bind(this)} type="text" placeholder="what need to do?"/>
            </div>
        )
    }
}

export default TodoHeader;