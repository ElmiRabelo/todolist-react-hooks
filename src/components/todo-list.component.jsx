import React from "react";

//material ui components
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";

//custom components
import Todo from "./todo.component";

function TodoList({ todos, removeTodo, updateComplete }) {
	const mapTodos = todos.map(todo => (
		<>
			<Todo
				id={todo.id}
				task={todo.task}
				key={todo.id}
				completed={todo.completed}
				removeTodo={removeTodo}
				updateComplete={updateComplete}
			/>
			<Divider />
		</>
	));
	return (
		<Paper
			style={{
				padding: "10px",
				backgroundColor: "#7289DA"
			}}
		>
			<List>{mapTodos}</List>
		</Paper>
	);
}

export default TodoList;
