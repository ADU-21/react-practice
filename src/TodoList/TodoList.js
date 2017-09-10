import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

class TodoList extends React.Component {
    render() {
        let todoListToshow = [];
        
        if(this.props.show === 'All') {
            todoListToshow = this.props.todos;
        }else if(this.props.show == ''){
            let todoListToshow = this.props.todos;
        }
        return (
            <ul className="todo-list">
            {
                todoListToshow.map((todo,index) => {
                    return <TodoItem text={todo.text} isDone={todo.isDone} index={index} {...this.props} />
                })
            }
            </ul>
        )
    }
}

export default TodoList;