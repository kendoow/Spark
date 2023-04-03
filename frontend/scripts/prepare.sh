#!/bin/bash

echo "Start prepare script..."
chmod +x ./scripts/storybook.sh

# Устанавливаем husky для pre-commit hook
cd ..
husky install frontend/.husky
