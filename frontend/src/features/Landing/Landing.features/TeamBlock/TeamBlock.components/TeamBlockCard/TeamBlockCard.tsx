import React from 'react';
import cn from 'classnames';
import Image from 'next/image';
import type { ITeamBlockProps } from './TeamBlockCard.typings';

import styles from './TeamBlockCard.module.scss';

export const TeamBlockCard = ({
	name,
	role,
	icons,
	description,
	side,
}: ITeamBlockProps) => {
	function socialMediaIcons() {
		return icons.map((icon) => (
			<a href={icon.url} key={icon.url}>
				<Image
					width={20}
					height={20}
					src={icon.icon}
					className={styles.icon}
					alt="link"
				/>
			</a>
		));
	}

	return (
		<div
			className={cn(styles.container, {
				[styles.right]: side === 'right',
			})}
		>
			<div className={styles.links}>
				<h4 className={styles.name}>{name}</h4>
				<p className={styles.role}>{role}</p>
				<div className={styles.icons}>{socialMediaIcons()}</div>
			</div>
			<div className={styles.description}>{description}</div>
		</div>
	);
};
