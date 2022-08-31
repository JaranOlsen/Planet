#!/usr/bin/env sh

# abort on errors
#set -e

# build
#npm run build

# navigate into the build output directory
#cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

#git init
#git checkout -b main
#git add -A
#git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:JaranOlsen/Planet.git main:gh-pages

#cd -

git init
git add .
git commit -m “deploy”
git branch -M main
git push -u origin main

npm run build
git add dist -f
git commit -m “something”
git subtree push --prefix dist origin gh-pages
