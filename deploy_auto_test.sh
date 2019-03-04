#!/bin/bash
echo "正式发布"
USER=root
HOST=39.104.185.174
DIR=/home/www/front/tms_front
echo ${USER}@${HOST}:${DIR}
rm -rf ./dist && npm run build && rsync -avz --delete dist/ ${USER}@${HOST}:${DIR}
echo "正式发布成功"
