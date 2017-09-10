import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'

class TodoList extends React.Component {
  render(){
    if(this.props.todos.length == 0) {
      return (
        <div className="todo-empty">恭喜您，目前没有待办任务</div>
      )
    } else {
      return (
        <ul className="todo-list">
          {
            this.props.todos.map((todo,index) => {
              //{...this.props} 用来传递TodoList的todos属性和delete、change方法。
              return <TodoItem text={todo.text} isDone={todo.isDone} time={todo.time} index={index} {...this.props} key={index}/>
            })
          }
        </ul>
      )
    }
  }
}
export default TodoList