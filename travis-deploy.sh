#!/bin/bash
tar -czf package.tgz _site
export SSHPASS=$DEPLOY_PASS
sshpass -e scp -P 2222 package.tgz $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH
sshpass -e ssh -p 2222 $DEPLOY_USER@$DEPLOY_HOST $DEPLOY_PATH/extract-package.sh
