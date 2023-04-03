module.exports = {
  "stories": [
    // Поддерживаем файлы историй только .tsx
    // TODO: Можно написать кастомный скрипт, который будет 
    // выдавать ошибку при нахождение файлов историй с другими расширениями
    "../src/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/builder-webpack5", 
    "@storybook/preset-scss"
  ],
  "typescript": { reactDocgen: false },
  "framework": "@storybook/react",
  "core": {
    // Отключает сбор данных для аналитики storybook.
    "disableTelemetry": true,
    // Генерирует файлы при возникновение ошибкок.
    "enableCrashReports": true,
    "builder": "@storybook/builder-webpack5"
  },
  "features": {
    "modernInlineRender": true,
  }
}