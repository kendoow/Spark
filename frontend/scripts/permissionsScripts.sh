#!/bin/bash

echo "Start permissions script..."

excludingFolder="/node_modules"
# Нахожит все скрипты с расширением .sh во всех подпапках кроме node_modules
scriptsFiles=$(find . -type f -name "*.sh" ! -path "*/node_modules/*")

# Выдаем разрешение данным скриптам
find . -type f -name "*.sh" ! -path "*/node_modules/*" -exec chmod +x {} \;

echo "Permission to be executable is granted to these files:"
echo $scriptsFiles
