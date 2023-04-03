const path = require('path');

module.exports = {
	stories: [
		// Поддерживаем файлы историй только .tsx
		// TODO: Можно написать кастомный скрипт, который будет
		// выдавать ошибку при нахождение файлов историй с другими расширениями
		'../src/**/*.stories.tsx',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/builder-webpack5',
		'@storybook/preset-scss',
	],
	typescript: { reactDocgen: false },
	framework: '@storybook/react',
	core: {
		// Отключает сбор данных для аналитики storybook.
		disableTelemetry: true,
		// Генерирует файлы при возникновение ошибкок.
		enableCrashReports: true,
		builder: '@storybook/builder-webpack5',
	},
	features: {
		modernInlineRender: true,
	},
	webpackFinal: async (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			'@styles': path.resolve(__dirname, '../src/styles'),
			'@components': path.resolve(__dirname, '../src/components'),
			'@features': path.resolve(__dirname, '../src/features'),
			'@pages': path.resolve(__dirname, '../src/pages'),
			'@hooks': path.resolve(__dirname, '../src/hooks'),
			'@assets': path.resolve(__dirname, '../src/assets'),
		};

		return config;
	},
};
