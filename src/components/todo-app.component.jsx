import React, { useState } from "react";

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
	const initialTodos = [
		{ id: 1, task: "Estudar React Native", completed: false },
		{ id: 2, task: "Formatar o notebook", completed: false },
		{ id: 3, task: "Comprar leite", completed: true }
	];
	const [todos, setTodos] = useState(initialTodos);

	const addTodos = newTodoText => {
		setTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
	};

	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: "100vh",
				backgroundColor: "#23272a"
			}}
			elevation={0}
		>
			<AppBar color="primary" position="static" style={{ height: "64px" }}>
				<Toolbar>
					<Typography color="inherit">TODO USANDO HOOKS</Typography>
				</Toolbar>
			</AppBar>

			<Grid container justify="center" style={{ marginTop: "2rem" }}>
				<Grid item xs={11} md={9} lg={7}>
					<TodoForm addTodo={addTodos} />
					<TodoList todos={todos} />
				</Grid>
			</Grid>
		</Paper>
	);
}

export default TodoApp;
