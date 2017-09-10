import React from 'react';
import { Button, Checkbox } from 'antd';
import './TodoFooter.css';

class TodoFooter extends React.Component{
    deleteAll(){
        this.props.clearDone();
    }

    showAll(){
        this.props.showAll();
    }

    render(){
        return (
        <div className="todo-footer">
            <span className="item-left">{this.props.todoLeftCount} item left</span>
            <Button onClick={this.showAll.bind(this)}>All</Button>
            <Button onClick={this.deleteAll.bind(this)}>Clear completed</Button>
        </div>
        )
    }
}

export default TodoFooter;