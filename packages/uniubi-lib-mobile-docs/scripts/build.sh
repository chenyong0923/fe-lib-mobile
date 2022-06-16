echo 'build start'

cd ../uniubi-lib-mobile
npm run build
cd ../uniubi-lib-mobile-demo
rm -rf yarn.lock node_modules
npm install --registry=http://npm.uniubi.com
npm run build:h5:production
cd ../uniubi-lib-mobile-docs
npm run build:docs
mkdir dist/h5
cp -r ../uniubi-lib-mobile-demo/dist/* ./dist/h5