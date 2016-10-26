// import * as $ from 'jquery/dist/jquery.min.js';

import { test } from './config/';

declare var jQuery: any;

console.log(`Application fake app started: ${test}`);
// let $ = require('jquery');
jQuery('app').text('Loaded From TS!, pleasdde read "rc/app/index.ts"' + test);
