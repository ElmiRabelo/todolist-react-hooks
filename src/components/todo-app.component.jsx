import React, { useEffect } from "react";
import useTodoState from "../hooks/useTodoState";

//components de material-ui
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

//custom components
import TodoList from "./todo-list.component";
import TodoForm from "./todo-form.component";

function TodoApp() {
	const initialTodos = JSON.parse(window.localStorage.getItem("todos")) || [
		{ id: 1, task: "Bem vindo ao app", completed: false }
	];

	const { todos, addTodo, removeTodo, updateComplete, editTodo } = useTodoState(
		initialTodos
	);

	useEffect(() => {
		window.localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

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
					fontSize: "3rem",
					letterSpacing: "0.4rem",
					fontFamily: "Roboto, sans-serif",
					fontWeight: 700,
					textShadow: "0 1px 1px rgba(0, 0, 0, 0.6)",
					color: "#f6f6f6",
					textAlign: "center",
					padding: "1rem",
					backgroundColor: "#7289DA"
				}}
			>
				Lista de Tarefas
			</h1>

			<Grid container justify="center" style={{ marginTop: "2rem" }}>
				<Grid item xs={11} md={9} lg={7}>
					<TodoForm addTodo={addTodo} />
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
