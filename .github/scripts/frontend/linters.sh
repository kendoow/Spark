#!/bin/bash

echo "Linters ci script started..."
cd frontend
pnpm eslint --fix
pnpm stylelint --fix
