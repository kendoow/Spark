import React from 'react';
import styles from "./Button.module.scss";
import cn from 'classnames';
import type { ButtonProps } from './Button.typings';




export const Button = ({ children, type = 'button', size = 'small', variant = 'primary' }: ButtonProps) => {

	const btnCn = cn(
		styles.btn,
		styles[size],
		styles[variant],
	);

	return (
		<button type={type} className={btnCn}>
			{children}
		</button>
	);
};
