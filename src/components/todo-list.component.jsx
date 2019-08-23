import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

function TodoList(props) {
	const mapTodos = props.todos.map(todo => (
		<>
			<ListItem>
				<ListItemText style={{ color: "white" }}>{todo.task}</ListItemText>
			</ListItem>
			<Divider />
		</>
	));
	return (
		<Paper
			style={{
				width: "60vw",
				padding: "20px 10px",
				margin: "12px 0",
				backgroundColor: "#7289da"
			}}
		>
			<List>{mapTodos}</List>
		</Paper>
	);
}

export default TodoList;
