#!/bin/bash

echo "Install dependencies ci script started..."
cd frontend
pnpm install --frozen-lockfile --ignore-scripts
