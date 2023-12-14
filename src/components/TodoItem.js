// TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onDelete, onEdit }) => {
    const formattedDateTime = new Date(todo.createdAt).toLocaleString();

    return (
        <div className="todo-item" key={todo.id}>
            <span>{todo.title}</span>
            <span>Created at: {formattedDateTime}</span>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
            <button onClick={() => onEdit(todo.id)}>Edit</button>
        </div>
    );
};

export default TodoItem;
