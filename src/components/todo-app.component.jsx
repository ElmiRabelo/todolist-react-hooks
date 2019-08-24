import React, { useState, useEffect } from "react";

import uuid from "uuid/v4";

//components de material-ui
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { inherits } from "util";

//custom components
import TodoList from "./todo-list.component";
import TodoForm from "./todo-form.component";

function TodoApp() {
	const initialTodos = JSON.parse(window.localStorage.getItem('todos')) || [{ id: 1, task: "Bem vindo ao app", completed: false }];

	const [todos, setTodos] = useState(initialTodos);

	useEffect(() => {
		window.localStorage.setItem("todos", JSON.stringify(todos));
	},[todos])
	/////////////////////////////////////////
	//--> Methods
	const addTodos = newTodoText => {
		setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
	};

	const removeTodo = todoId => {
		const filteredTodos = todos.filter(todo => todo.id !== todoId);
		setTodos(filteredTodos);
	};

	const updateComplete = todoId => {
		const updatedTodos = todos.map(todo =>
			todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
		);
		setTodos(updatedTodos);
	};

	const editTodo = (todoId, newValue) => {
		const updatedTodos = todos.map(todo =>
			todo.id === todoId ? { ...todo, task: newValue } : todo
		);
		setTodos(updatedTodos);
	};

	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: "100%	",
				backgroundColor: "#23272a",
				borderRadius: 0,
				overflowY: "scroll"
			}}
			elevation={0}
		>
			<h1
				style={{
					margin: 0,
					fontSize: "2.5rem",
					letterSpacing: "0.4rem",
					fontFamily: "sans-serif",
					color: "#ffffff",
					textAlign: "center",
					padding: "2rem 0 10px 0"
				}}
			>
				Lista de Tarefas
			</h1>

			<Grid container justify="center" style={{ marginTop: "2rem" }}>
				<Grid item xs={11} md={9} lg={7}>
					<TodoForm addTodo={addTodos} />
					<TodoList
						todos={todos}
						removeTodo={removeTodo}
						updateComplete={updateComplete}
						editTodo={editTodo}
					/>
				</Grid>
			</Grid>
		</Paper>
	);
}

export default TodoApp;
