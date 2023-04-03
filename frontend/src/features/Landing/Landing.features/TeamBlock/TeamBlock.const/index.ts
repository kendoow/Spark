import type { ITeamCards } from '../TeamBlock.typings';

import logo from '../../../../../assets/sun.svg';

export const teamCards: ITeamCards[] = [
	{
		card: {
			side: 'right',
			description: 'example123123123 12312312 31 3123 1',
			role: 'backend',
			name: 'Vadim1231231',
			icons: [
				{ icon: logo, url: '1236' },
				{ icon: logo, url: '1237' },
			],
		},
		text: 'Our',
	},
	{
		card: {
			side: 'left',
			description: 'example123123123 12312312 31 3123 !',
			role: 'backend',
			name: 'Vadim1231232',
			icons: [
				{ icon: logo, url: '1232' },
				{ icon: logo, url: '1234' },
			],
		},
		text: 'Team',
	},
	{
		card: {
			side: 'right',
			description: 'example123123123 12312312 31 3123 ?',
			role: 'backend',
			name: 'Vadim1231233',
			icons: [
				{ icon: logo, url: '1231' },
				{ icon: logo, url: '1233' },
			],
		},
		text: 'Team',
	},
];
