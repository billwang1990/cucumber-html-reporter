#!/usr/bin/env node

'use strict';

var reporter = require('./lib/reporter');
var program = require('commander');

program
	.version('0.2.16')
	.option('-t, --theme <string>', 'html report theme name, e.g. bootstrap')
	.option('-j, --jsonFile <string>', 'json file name')
	.option('-J, --jsonDir <string>', 'specify the multiple json files directory')
	.option('-o, --output <string>', 'output directory')
	.option('-l, --launchReport', 'launch the report page after finish')
	.option('-r, --reportSuiteAsScenarios', 'report suite as scenarios')
	.parse(process.argv);

var options = {
    theme: program.theme || 'bootstrap',
    jsonFile: program.jsonFile,
    jsonDir: program.jsonDir,
    output: program.output,
    reportSuiteAsScenarios: program.launchReport || true,
    launchReport: program.reportSuiteAsScenarios || true
};

reporter.generate(options);

