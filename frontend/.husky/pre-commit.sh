#!/usr/bin/env sh

. "$(dirname -- "$0")/_/husky.sh"

cd frontend
pnpm eslint -- --fix
pnpm stylelint -- --fix
