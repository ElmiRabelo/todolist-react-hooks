import React from "react";

//material ui components
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

//utils
import userInputState from "../hooks/userInputState";

function TodoForm({ addTodo }) {
	const [value, handleChange, reset] = userInputState("");
	const textFieldStyles = {
		width: "60vw",
		padding: "10px",
		backgroundColor: "#99aab5",
		margin: "10px 0",
		borderRadius: "5px"
	};
	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault();
					addTodo(value);
					reset();
				}}
			>
				<TextField
					style={textFieldStyles}
					value={value}
					placeholder="Adicionar nova todo"
					onChange={handleChange}
				/>
			</form>
		</div>
	);
}

export default TodoForm;
