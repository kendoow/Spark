#!/bin/bash

echo "Permissions ci script started..."
echo "$IS_FRONTEND $PATH_BUILD_SCRIPT $PATH_LINTERS_SCRIPT $PATH_INSTALL_DEPS_SCRIPT"
if [ $IS_FRONTEND -e 1 ]; then
    echo "Is Frontend."
    chmod +x $PATH_BUILD_SCRIPT
    chmod +x $PATH_LINTERS_SCRIPT
    chmod +x $PATH_INSTALL_DEPS_SCRIPT

    if [ $? -e 0 ]; then
        echo "The script ended successfully."
    fi
    exit 0
fi
