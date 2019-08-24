import { useState } from "react";
import uuid from "uuid/v4";

export default initialTodos => {
	const [todos, setTodos] = useState(initialTodos);

	return {
		todos,
		addTodo: newTodoText => {
			setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
		},
		removeTodo: todoId => {
			const filteredTodos = todos.filter(todo => todo.id !== todoId);
			setTodos(filteredTodos);
		},
		updateComplete: todoId => {
			const updatedTodos = todos.map(todo =>
				todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
			);
		},
		editTodo: (todoId, newValue) => {
			const updatedTodos = todos.map(todo =>
				todo.id === todoId ? { ...todo, task: newValue } : todo
			);
			setTodos(updatedTodos);
		}
	};
};
