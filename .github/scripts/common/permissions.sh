#!/bin/bash

echo "Permissions ci script started..."
if [ $IS_FRONTEND -e 1 ]; then
    echo "Is Frontend."
    chmod +x PATH_BUILD_SCRIPT
    chmod +x PATH_LINTERS_SCRIPT
    chmod +x PATH_INSTALL_DEPS_SCRIPT
fi
