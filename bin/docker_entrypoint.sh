#!/bin/sh

set -e

echo "=== ENTRYPOINT ==="

COMMAND="$1"

echo "=== BUNDLING ==="
yarn install

case "$COMMAND" in
  *)
    echo "=== RUNNING COMAND  $*==="
    sh -c "$*"
    ;;
esac