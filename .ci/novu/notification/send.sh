#!/bin/bash

if [ "x${NOVU_API_KEY}" == "x" ]; then
  echo "The NOVU_API_KEY env. var. is not set, but it is mandatory"
  exit 7;
fi;

if [ "x${NOVU_TRIGGER_IDENTIFIER}" == "x" ]; then
  echo "The NOVU_TRIGGER_IDENTIFIER env. var. is not set, but it is mandatory"
  exit 7;
fi;

if [ "x${NOVU_TENANT_IDENTIFIER}" == "x" ]; then
  echo "The NOVU_TENANT_IDENTIFIER env. var. is not set, but it is mandatory"
  exit 7;
fi;

export NOVU_SUBSCRIBER_ID=${NOVU_SUBSCRIBER_ID:-"i dont exist man"}
export NOVU_NOTIF_MSG=${NOVU_NOTIF_MSG:-"salutttt"}



echo "--------------------------------------------------------------"
echo " - NOVU_API_KEY=[${NOVU_API_KEY}]"
echo " - NOVU_NOTIF_MSG=[${NOVU_NOTIF_MSG}]"
echo " - NOVU_SUBSCRIBER_ID=[${NOVU_SUBSCRIBER_ID}]"
echo " - NOVU_TRIGGER_IDENTIFIER=[${NOVU_TRIGGER_IDENTIFIER}]"
echo "--------------------------------------------------------------"
pnpm exec tsx $(pwd)/.ci/novu/notification/send.ts