// AddTodoForm.js
import React, { useState } from 'react';

const AddTodoForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            const newTodo = {
                id: Date.now(),
                title: title.trim(),
            };
            onAdd(newTodo);
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add new task"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;
