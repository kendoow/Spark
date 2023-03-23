#!/bin/bash

echo "Permissions ci script started..."

if [ $IS_FRONTEND -eq 1 ]; then
    echo "Is Frontend."
    chmod +x $PATH_BUILD_SCRIPT
    chmod +x $PATH_LINTERS_SCRIPT
    chmod +x $PATH_INSTALL_DEPS_SCRIPT

    if [ $? -eq 0 ]; then
        echo "The script ended successfully."
    fi
    exit 0
fi
