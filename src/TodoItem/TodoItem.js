import React from 'react';
import ReactDOM from 'react-dom';
import { Button,Checkbox } from 'antd';
import './TodoItem.css';

class TodoItem extends React.Component {
    handlerChange() {
        let isDone = !this.props.isDone;
        this.props.changeTodoState(this.props.index, isDone);
    }
    handlerDelete() {
        this.props.deleteTodo(this.props.index)
    }
    handlerMouseIn () {
        ReactDOM.findDOMNode(this.refs.delButton).style.display = 'inline-block'
    }
    handlerMouseOut () {
        ReactDOM.findDOMNode(this.refs.delButton).style.display = 'none'
    }

    render() {
        let className = this.props.isDone?'task-done':''
        return (
            <li onMouseOver={this.handlerMouseIn.bind(this)} onMouseOut={this.handlerMouseOut.bind(this)}>
                <Checkbox checked={this.props.isDone} onChange={this.handlerChange.bind(this)}/>
                <span className={className+' task'} onClick={this.handlerChange.bind(this)}>{this.props.text}</span>
                <Button ref="delButton" onClick={this.handlerDelete.bind(this)}>X</Button>
            </li>
        )
    }
}

export default TodoItem;
