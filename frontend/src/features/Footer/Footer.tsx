import { FooterPrivacy } from './Footer.components/FooterPrivacy/FooterPrivacy';
import { FooterMain } from './Footer.components/FooterMain/FooterMain';

import styles from './Footer.module.scss';

export function Footer() {
	return (
		<div className={styles.container}>
			<FooterMain />
			<FooterPrivacy />
		</div>
	);
}
