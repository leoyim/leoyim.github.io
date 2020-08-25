#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run wiki:build

# 进入生成的文件夹
cd wiki/.vuepress/dist

# 如果是发布到自定义域名
# echo 'leoyim.github.io' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:leoyim/leoyim.github.io.git master:gh-pages

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
