#!/bin/bash

echo "Install dependencies ci script started..."
cd frontend
npm install -g pnpm
pnpm install --frozen-lockfile --ignore-scripts
