import React, { useState } from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Todo({ task, completed }) {
	return (
		<ListItem>
			<Checkbox checked={completed} />
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
				<IconButton aria-label="Editar">
					<EditIcon />
				</IconButton>
				<IconButton aria-label="Deletar">
					<DeleteIcon />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
}

export default Todo;
