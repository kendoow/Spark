import React from 'react';
import styles from "./Button.module.scss";


interface ButtronProps  {
    label : string
}

export const Button = ({label} : ButtronProps) => {

	return (
		<button type="button" className={styles.storybookButton}>
			{label}
		</button>
	);
};
