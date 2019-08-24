import React from "react";

import useInputState from "../hooks/userInputState";

import TextField from "@material-ui/core/TextField";

function EditTodo({ task, editTodo, toggleEditing, id }) {
	const [value, handleChange, reset] = useInputState(task);

	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				editTodo(id, value);
				toggleEditing();
				reset();
			}}
		>
			<TextField value={value} onChange={handleChange} margin="normal" />
		</form>
	);
}

export default EditTodo;
