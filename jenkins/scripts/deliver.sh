#!/usr/bin/env sh

#builds for production in the local "build" directory
#/var/jenkins_home/workspace/RedSquadron.io.Deploy,'
set -x
npm run build
set +x

#copy build files to prod folder at /var/www/
set -x
CONTAINER_ID=$(docker ps -alq)
docker cp "$CONTAINER_ID":/var/jenkins_home/workspace/Red.Squadron.io.Deploy/build/. /var/www
set +x