import Image from 'next/image';
import { useRouter } from 'next/router';

import { Button } from '@components/Button/Button';

import languages from './FooterMain.languages';

import styles from './FooterMain.module.scss';
import logo from '@assets/logo.svg';

export function FooterMain() {
	const { locale } = useRouter();

	return (
		<div className={styles.main}>
			<h4 className={styles.mainTitle}>Spark</h4>
			<div className={styles.mainLinks}>
				<Button variant="link" className={styles.mainLinkElement}>
					{languages[locale]['about']}
				</Button>
				<Button variant="link" className={styles.mainLinkElement}>
					{languages[locale]['privacy']}
				</Button>
				<Button variant="link" className={styles.mainLinkElement}>
					{languages[locale]['contact us']}
				</Button>
				<Button variant="link" className={styles.mainLinkElement}>
					{languages[locale]['support']}
				</Button>
			</div>
			<Image className={styles.mainLogo} src={logo} alt="logo" />
		</div>
	);
}
