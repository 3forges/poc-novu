#!/bin/bash

if [ "x${NOVU_API_KEY}" == "x" ]; then
  echo "The NOVU_API_KEY env. var. is not set, but it is mandatory"
  exit 7;
fi;

export NOVU_SUBSCRIBER_FIRSTNAME=${NOVU_SUBSCRIBER_FIRSTNAME:-"Pierre"}
export NOVU_SUBSCRIBER_LASTNAME=${NOVU_SUBSCRIBER_LASTNAME:-"De Ronsard"}
export NOVU_SUBSCRIBER_ID=${NOVU_SUBSCRIBER_ID:-"123ronsard"}



echo "--------------------------------------------------------------"
echo " - NOVU_API_KEY=[${NOVU_API_KEY}]"
echo " - NOVU_SUBSCRIBER_FIRSTNAME=[${NOVU_SUBSCRIBER_FIRSTNAME}]"
echo " - NOVU_SUBSCRIBER_LASTNAME=[${NOVU_SUBSCRIBER_LASTNAME}]"
echo " - NOVU_SUBSCRIBER_ID=[${NOVU_SUBSCRIBER_ID}]"
echo "--------------------------------------------------------------"
pnpm exec tsx $(pwd)/.ci/novu/subscriber/create.ts