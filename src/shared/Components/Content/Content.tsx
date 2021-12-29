import React from 'react'
import useStyles from "./styles";
import { Container } from "@mui/material";

interface ILayoutProps {
	children?: React.ReactNode
}

export const Content = ({ children }: ILayoutProps) => {
	const classes = useStyles()
	return (
		<Container className={classes.content}>
			{children}
		</Container>
	)
}
