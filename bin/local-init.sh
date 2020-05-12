#!/usr/bin/env bash

set -e

readonly PARENT_DIR=$(cd $(dirname "${BASH_SOURCE[0]}") && pwd -P)
readonly LOCALENV_DIR=$(cd $(dirname $(dirname $(dirname "$PARENT_DIR"))) && pwd -P)

readonly APP_DIR=$(cd $(dirname "$PARENT_DIR") && pwd -P)

source $LOCALENV_DIR/bin/utils/shell-helpers.sh

# Main functionality of the script
main() {
  echo_yellow "Setting up localenv-example-node repo..."

  (
    # Make sure script is running from the main application directory
    cd $APP_DIR

    # Build docker images
    echo "Building docker images with docker-compose..."
    docker-compose build

    # Install node dependencies
    echo "Installing dependencies..."
    docker-compose run --rm localenv-example-node npm ci

    # Start docker containers
    echo "Starting containers with docker-compose..."
    docker-compose up -d
  )

  echo_green "localenv-example-node repo setup successfully!"
}

# Function that outputs usage information
usage() {
  cat <<EOF

Usage: bash $BIN_ROOT/$(basename $0) <options>

Script used to initialize this application

Options:
  -h, --help              Print this message and quit
EOF
}

# Parse input options
while getopts ":h-:" opt; do
  case "$opt" in
    h) usage && exit 0;;
    -)
      case "${OPTARG}" in
        help) usage && exit 0;;
        *) echo "Invalid option: --$OPTARG." && usage && exit 1;;
      esac
    ;;
    \?) echo "Invalid option: -$OPTARG." && usage && exit 1;;
    :) echo >&2 "Option -$OPTARG requires an argument." && exit 1;;
  esac
done

# Execute main functionality
main
