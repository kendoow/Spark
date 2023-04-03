export interface ISelectProps {
	selected: string;
	options: string[];
	setSelected: (option: string) => void;
	arrow?: string;
}
