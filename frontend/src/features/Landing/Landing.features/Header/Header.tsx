import React from 'react';
import { HeaderNavigation } from './Header.components/HeaderNavigation/HeaderNavigation';
import { HeaderAuth } from './Header.components/HeaderAuth/HeaderAuth';

import styles from './Header.module.scss';

export const Header = () => {
	return (
		<div className={styles.header}>
			<HeaderNavigation />
			<HeaderAuth />
		</div>
	);
};
