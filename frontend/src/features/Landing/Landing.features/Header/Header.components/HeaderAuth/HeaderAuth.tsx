import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Select } from '@features/Select/Select';
import { Button } from '@components/Button/Button';

import styles from './HeaderAuth.module.scss';
import sun from '@assets/sun.svg';
import arrow from '@assets/arrow-down.svg';

export function HeaderAuth() {
	const router = useRouter();
	const [selected, setSelected] = React.useState<string | undefined>();

	React.useEffect(() => {
		setSelected(router.locale);
	}, []);

	const setSelectedSelectHandler = React.useCallback((option) => {
		setSelected(option);
		router.push('/', undefined, { locale: option });
	}, []);

	return (
		<div className={styles.headerAuth}>
			<Image src={sun} alt="Theme" />
			<Select
				options={router.locales}
				selected={selected}
				setSelected={setSelectedSelectHandler}
				arrow={arrow}
			/>
			<Button variant="secondary">Sign up</Button>
			<Button>Log in</Button>
		</div>
	);
}
