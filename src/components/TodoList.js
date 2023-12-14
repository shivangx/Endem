// TodoList.js
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import EditTodoForm from './EditTodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(null);

    const handleAddTodo = (newTodo) => {
        const todoWithDate = {
            ...newTodo,
            createdAt: new Date().toISOString(), // Set the createdAt property
        };
        setTodos([...todos, todoWithDate]);
    };

    const handleDeleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    const handleEditTodo = (id) => {
        setEditId(id);
    };

    const handleUpdateTodo = (updatedTodo) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === updatedTodo.id ? updatedTodo : todo
        );
        setTodos(updatedTodos);
        setEditId(null);
    };

    return (
        <div>
            <h1>Todo List</h1>
            {todos.map((todo) =>
                todo.id === editId ? (
                    <EditTodoForm key={todo.id} todo={todo} onUpdate={handleUpdateTodo} />
                ) : (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={handleDeleteTodo}
                        onEdit={handleEditTodo}
                    />
                )
            )}
            <AddTodoForm onAdd={handleAddTodo} />
        </div>
    );
};

export default TodoList;
