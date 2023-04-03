import React from 'react';
import Image from 'next/image';

import { useOutsideClick } from '@hooks/useOutsideClick/useOutsideClick';

import type { ISelectProps } from './Select.typings';
import styles from './Select.module.scss';

export function Select({
	selected,
	setSelected,
	options,
	arrow,
}: ISelectProps) {
	const [isActive, setIsActive] = React.useState<boolean>(false);
	const ref = React.useRef(null);

	const selectCloseHandler = () => {
		setIsActive(false);
	};

	const onSelectedClickHandler = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation();
		setIsActive((isActive) => !isActive);
	};

	const setSelectedHandler = (option: string) => {
		setSelected(option);
		selectCloseHandler();
	};

	useOutsideClick(ref, selectCloseHandler);

	return (
		<div ref={ref} onClick={selectCloseHandler} className={styles.select}>
			<button
				className={styles.selectSelected}
				onClick={onSelectedClickHandler}
			>
				{selected}
				{arrow ? (
					<Image
						width={15}
						height={15}
						className={styles.selectSelectedArrow}
						src={arrow}
						alt="Arrow"
					/>
				) : null}
			</button>

			{isActive ? (
				<div className={styles.selectContent}>
					{options.map((option) => (
						<button
							key={option}
							className={styles.selectContentItem}
							onClick={() => setSelectedHandler(option)}
						>
							{option}
						</button>
					))}
				</div>
			) : null}
		</div>
	);
}
