import { Button } from '@components/Button/Button';

import styles from './IntroBlock.module.scss';

export const IntroBlock = () => {
	return (
		<div className={styles.intro}>
			<h1 className={styles.introTitle}>Who connect</h1>
			<h3 className={styles.introDescription}>
				Manage your work chats easy and fun.
			</h3>
			<Button size="medium">About</Button>
		</div>
	);
};
