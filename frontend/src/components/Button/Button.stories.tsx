import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import styles from './Button.module.scss';
import { Button } from './Button';

export default {
	title: 'UiKit/Button',
	component: Button,
	argTypes: {
		variant: {
			type:'string',
			description:'Описание внешнего вида кнопки',
			defaultValue: 'primary',
			options:['primary', 'secondary'],
			control:{
				type:'radio',
			},
		},
		size: {
			type:'string',
			description:'Вариант размера кнопки',
			defaultValue: 'sm',
			options:['small', 'medium'],
			control:{
				type:'radio',
			},
		},
		type: {
			type:'string',
			description:'Тип кнопки',
			defaultValue: 'button',
			options:['button', 'submit', 'reset'],
			control:{
				type:'radio',
			},
		},
		children: {
			type:'string',
			description:'Содержимое кнопки',
			name:'label',
			defaultValue:'Button',
		},
	},
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button className={styles.btn} {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	variant:'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	variant:'secondary',
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
	size: 'medium',
};
