import React from 'react'
import { Button, Checkbox } from 'antd'
import './TodoFooter.css'

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
        <label>
          <Checkbox checked={this.props.isAllChecked} onChange={this.changeAll.bind(this)}/>全选
        </label>
        <span className="item-left">还剩{minus}未完成</span>
        <span>
        <Button type="danger" onClick={this.deleteAll.bind(this)}>清除全部已完成</Button>
        </span>
      </div>
    )
  }
}

export default TodoFooter