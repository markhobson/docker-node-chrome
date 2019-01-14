#!/bin/bash

DOCKER_IMAGE=markhobson/node-chrome

docker pull $DOCKER_IMAGE
docker run -it -v "$PWD":/usr/src -w /usr/src $DOCKER_IMAGE /bin/bash -c "npm --unsafe-perm install && npm test"
