echo 'build start'

cd ../uniubi-lib-mobile-demo
yarn build:h5:production
cd ../uniubi-lib-mobile-docs
umi build
mkdir dist/h5
cp -r ../uniubi-lib-mobile-demo/dist/* ./dist/h5