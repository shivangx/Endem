// EditTodoForm.js
import React, { useState, useEffect } from 'react';

const EditTodoForm = ({ todo, onUpdate }) => {
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTitle(todo.title);
    }, [todo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            const updatedTodo = { ...todo, title: title.trim() };
            onUpdate(updatedTodo);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Edit task"
            />
            <button type="submit">Update</button>
        </form>
    );
};

export default EditTodoForm;
