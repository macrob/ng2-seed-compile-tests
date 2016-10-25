# ng2-seed-compile-tests



# Grunt Modules
>> Local Npm module "grunt-contrib-clean" not found. Is it installed?
>> Local Npm module "grunt-contrib-copy" not found. Is it installed?
>> Local Npm module "grunt-jasmine-nodejs" not found. Is it installed?
>> Local Npm module "grunt-webpack" not found. Is it installed?
>> Local Npm module "grunt-protractor-runner" not found. Is it installed?
>> Local Npm module "grunt-karma" not found. Is it installed?
>> Local Npm module "grunt-ts" not found. Is it installed?
>> Local Npm module "grunt-todo" not found. Is it installed?
>> Local Npm module "grunt-typedoc" not found. Is it installed?
>> Local Npm module "grunt-tslint" not found. Is it installed?
>> Local Npm module "grunt-contrib-watch" not found. Is it installed?
>> Local Npm module "grunt-webdriver-manager" not found. Is it installed?
>> Local Npm module "grunt-selenium-standalone" not found. Is it installed?
>> Local Npm module "grunt-http-server" not found. Is it installed?
>> Local Npm module "grunt-rename" not found. Is it installed?
>> Local Npm module "grunt-browser-sync" not found. Is it installed?
>> Local Npm module "grunt-contrib-sass" not found. Is it installed?
>> Local Npm module "grunt-contrib-connect" not found. Is it installed?

Do:
npm install --save grunt-contrib-clean grunt-contrib-copy grunt-jasmine-nodejs grunt-webpack grunt-protractor-runner grunt-karma grunt-ts grunt-todo grunt-typedoc grunt-tslint grunt-contrib-watch grunt-webdriver-manager grunt-selenium-standalone grunt-http-server grunt-rename grunt-browser-sync grunt-contrib-sass grunt-contrib-connect



Loading "webpack-dev-server.js" tasks...ERROR
>> Error: Cannot find module 'webpack'
Loading "webpack.js" tasks...ERROR
>> Error: Cannot find module 'webpack'
Loading "grunt-karma.js" tasks...ERROR
>> Error: Cannot find module 'karma'
Loading "tslint.js" tasks...ERROR
>> Error: Cannot find module 'tslint'

Do:
grubnpm install --save webpack tslint karma webpack-dev-server




To Start test server:
npm start;


By default read config/default.json
to change it to config/production.json

need to set NODE_ENV = production;
fish console:
set -x NODE_ENV production



npm install typescript@next



Displays:
 xvfb-run --server-args='-screen 0, 1024x768x24' chromium-browser --allow-running-insecure-content --ignore-certificate-errors --ignore-urlfetcher-cert-requests  --disable-gpu --no-sandbox https://admin:password@localhost



 sudo Xvfb :1 -screen 0 1024x768x24 -ac +extension GLX +extension RANDR +render -noreset &
export DISPLAY=":1"
$ chromium-browser --allow-running-insecure-content --ignore-certificate-errors --ignore-urlfetcher-cert-requests  --disable-gpu --no-sandbox https://admin:password@localhost



Cannot find module 'protractor-jasmine2-screenshot-reporter'
npm install --save protractor-jasmine2-screenshot-reporter phantomjs


npm install --save systemjs
npm install --save systemjs reflect-metadata
