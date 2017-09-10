import React from 'react';
import { Button, Checkbox } from 'antd';
import './TodoFooter.css';

class TodoFooter extends React.Component{
  deleteAll(){
    this.props.clearDone()
  }
  changeAll(e){
    this.props.changeTodoState(null,e.target.checked,true)
  }
  render(){
    let minus = this.props.todoCount - this.props.todoDoneCount
    return (
      <div className="todo-footer">
        <span className="item-left">{minus} item left</span>
        <Button type="danger" onClick={this.deleteAll.bind(this)}>Clear completed</Button>
      </div>
    )
  }
}

export default TodoFooter;