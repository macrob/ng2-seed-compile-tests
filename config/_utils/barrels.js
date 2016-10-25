var config = require('config');
var path = require('path');
var fs = require('fs');
var exec = require('child_process').execSync;


var build = config.get('grunt.build');
var root = path.resolve('/var/www2/ng2-seed/config/_utils/../../');
var buildPAth = path.resolve(root, 'dist', build) + '/';

var writeDataToFile = buildPAth + 'app/systemjs.configs.js';

function getModules() {
	var result = [];
	var rs = exec('find ' + root + '/dist/gbuild/app -iname \'index.js\'', {
		encoding: 'utf-8'
	});

	rs = rs.split("\n");

	rs.forEach( (item) => {

		item = path.resolve(item);

		var dirname = path.dirname(item);
		var barrel = dirname.replace(buildPAth, '');

		if (item === root || barrel === 'app') {
			return true;
		}

		// console.log({item, dirname, build, root, buildPAth, barrel});
		result.push(barrel);
	});

	return result;
}

function format(barrels) {
	var result = '';

	barrels.forEach( (item) => {
		result += "'" + item+ "': {main: 'index.js', defaultExtension: 'js'},\n";
	});

	return result;
}

function replace(file, content, keyword = 'var barrels = {};') {
	var cnf = fs.readFileSync(file, {
		encoding: 'utf-8'
	});

	content = "var barrels = {\n" + content + "\n};";
	// console.log(keyword, content, cnf);

	return cnf.replace(keyword, content);

}

var cntModules = format(getModules());
// console.log(replace(writeDataToFile, cntModules));
fs.writeFileSync(writeDataToFile, replace(writeDataToFile, cntModules));
