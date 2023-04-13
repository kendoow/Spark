#!/bin/bash

echo "Start prepare script..."
pathToPermissionScript="./scripts/permissionsScripts.sh"

chmod +x $pathToPermissionScript
$pathToPermissionScript

# Устанавливаем husky для pre-commit hook
cd ..
husky install frontend/.husky
