import { TeamBlockCard } from './TeamBlock.components/TeamBlockCard/TeamBlockCard';

import { teamCards } from './TeamBlock.const';

import styles from './TeamBlock.module.scss';

export const TeamBlock = () => {
	function teamsCards() {
		return teamCards.map((item) => {
			return (
				<div key={item.card.name} className={styles.teamBlockSide}>
					{item.card.side === 'left' ? (
						<div className={styles.teamBlockSideText}>
							{item.text}
						</div>
					) : null}
					<TeamBlockCard {...item.card} />
					{item.card.side === 'right' ? (
						<div className={styles.teamBlockSideText}>
							{item.text}
						</div>
					) : null}
				</div>
			);
		});
	}

	return <div className={styles.teamBlock}>{teamsCards()}</div>;
};
