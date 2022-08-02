#!/usr/bin/env sh

#builds for production in the local "build" directory
#/var/jenkins_home/workspace/RedSquadron.io.Deploy,'

set -x
npm run build
set +x

#copy build files to prod folder at /var/www/
set -x
CONTAINER_ID=$(docker ps -alq)
docker cp "CONTAINER_ID":/var/jenkins_home/workspace/Red.Squadron.io.Deploy/build/ /var/www/
set +x

#echo 'The following "npm" command runs your Node.js/React application in'
#echo 'development mode and makes the application available for web browsing.'
#echo 'The "npm start" command has a trailing ampersand so that the command runs'
#echo 'as a background process (i.e. asynchronously). Otherwise, this command'
#echo 'can pause running builds of CI/CD applications indefinitely. "npm start"'
#echo 'is followed by another command that retrieves the process ID (PID) value'
#echo 'of the previously run process (i.e. "npm start") and writes this value to'
#echo 'the file ".pidfile".'

#set -x
#npm start &
#sleep 1
#echo $! > .pidfile
#set +x
