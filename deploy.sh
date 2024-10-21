#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# use gh-pages to deploy to the gh-pages branch
npx gh-pages -d dist

cd -