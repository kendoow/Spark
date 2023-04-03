#!/bin/bash

echo "Start storybook script..."

pathToFileGlobalScss="src/styles/global.scss"
pathToOutputFile=".storybook/global.css"

if [ ! -f $pathToFileGlobalScss ]; then
    echo "Error: No file with global styles found on this path - $pathToFileGlobalScss"
    exit 1
fi

# При завершение скрипта удаляем файл сгенерированных стилей
trap "rm -rf $pathToOutputFile" EXIT

pnpm exec sass $pathToFileGlobalScss $pathToOutputFile --no-source-map

if [ $IS_BUILD -eq 1 ]; then
    pnpm exec build-storybook
    exit 0
fi

pnpm exec start-storybook -p 6006
