#!/bin/bash
echo "预发测试"
USER=app
HOST=39.104.21.131
DIR=/www/front/tms_front
echo ${USER}@${HOST}:${DIR}
rm -rf ./dist && npm run build && rsync -avz --delete dist/ ${USER}@${HOST}:${DIR}
echo "预发环境发布成功"
