const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json/',
	reportPath: './cypress/cucumber-json/',
	metadata:{
        browser: {
            name: 'chrome',
            version: '89.0.43'
        },
        device: 'Local Machine',
        platform: {
            name: 'Chrome',
            version: '89.0.43'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'WebCompUol'},
            {label: 'Release', value: '1.0'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Apr 20th 2021'},
            {label: 'Execution End Time', value: 'Apr 20th 2021'}
        ]
    }
});