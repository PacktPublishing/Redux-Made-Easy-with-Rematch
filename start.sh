#!/usr/bin/env bash

NO_FORMAT="\033[0m"
F_BOLD="\033[1m"
C_DODGERBLUE2="\033[38;5;27m"

echo -e """
  *********************************
  ${F_BOLD}${C_DODGERBLUE2}Rematch book Official CLI $NO_FORMAT

  ${F_BOLD}Chapter code running:$NO_FORMAT $1
  ${F_BOLD}With the command:$NO_FORMAT yarn $2

  *********************************
"""

yarn workspace $1 $2