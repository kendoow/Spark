interface Icons {
	url: string;
	icon: string;
}
export interface ITeamBlockProps {
	name: string;
	role: string;
	icons: Icons[];
	description: string;
	side: 'left' | 'right';
}
