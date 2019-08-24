import React, { useState } from "react";

import useToggleState from "../hooks/useToggleState";

//material ui components
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import EditTodo from "./edit-todo.component";

function Todo({ id, task, completed, removeTodo, updateComplete, editTodo }) {
	const [isEditing, toggleIsEditing] = useToggleState(false);

	return (
		<ListItem>
			{isEditing ? (
				<EditTodo
					id={id}
					editTodo={editTodo}
					task={task}
					toggleEditing={toggleIsEditing}
				/>
			) : (
				<>
					<Checkbox
						checked={completed}
						onClick={() => updateComplete(id)}
						color="white"
					/>
					<ListItemText
						style={{
							color: "#222",
							fontSize: "18px",
							textDecoration: completed ? "line-through" : "none",
							letterSpacing: "0.1rem"
						}}
					>
						{task}
					</ListItemText>
					<ListItemSecondaryAction>
						<IconButton aria-label="Editar" onClick={toggleIsEditing}>
							<EditIcon />
						</IconButton>
						<IconButton aria-label="Deletar" onClick={() => removeTodo(id)}>
							<DeleteIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</>
			)}
		</ListItem>
	);
}

export default Todo;
