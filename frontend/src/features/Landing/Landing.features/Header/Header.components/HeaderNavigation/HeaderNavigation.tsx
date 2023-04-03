import Image from 'next/image';
import { Button } from '@components/Button/Button';

import styles from './HeaderNavigation.module.scss';
import logo from '@assets/logo.svg';

export function HeaderNavigation() {
	return (
		<div className={styles.navigation}>
			<Image className={styles.navigationLogo} src={logo} alt="logo" />
			<Button variant="link" className={styles.navigationLink}>
				About
			</Button>
			<Button variant="link" className={styles.navigationLink}>
				Support
			</Button>
			<Button variant="link" className={styles.navigationLink}>
				Contact us
			</Button>
		</div>
	);
}
