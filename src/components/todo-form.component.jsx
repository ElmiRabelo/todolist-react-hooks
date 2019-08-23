import React from "react";

//material ui components
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

//utils
import userInputState from "../hooks/userInputState";

function TodoForm({ addTodo }) {
	const [value, handleChange, reset] = userInputState("");
	const textFieldStyles = {
		padding: "10px 10px 0 10px",
		backgroundColor: "#e7e7e7",
		borderBottom: "none",
		margin: "10px 0",
		borderRadius: "5px",
		alignSelf: "center"
	};
	return (
		<div style={textFieldStyles}>
			<form
				onSubmit={e => {
					e.preventDefault();
					addTodo(value);
					reset();
				}}
			>
				<TextField
					value={value}
					placeholder="Adicionar nova todo"
					fullWidth={true}
					onChange={handleChange}
				/>
			</form>
		</div>
	);
}

export default TodoForm;
