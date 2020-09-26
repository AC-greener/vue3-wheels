rm -rf dist &&
npm run build &&
cd dist
git init &&
git add . &&
git commit -m 'update' &&
git branch -M master &&
git remote add origin git@github.com:AC-greener/vue3-wheels-website.git &&
git push -f -u origin master &&
cd ..
echo https://ac-greener.github.io/vue3-wheels-website/index.html#/