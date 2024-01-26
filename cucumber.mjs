const getWorldParams = () => {
    const params = {
        foo: 'bar',
    };

    return params;
};

const config = {
    requireModule: ['ts-node/register'],
    require: ['src/**/*.ts'],
    paths: [
        'src/**/*.feature'
    ],
    format: [
        // 'message:e2e/reports/cucumber-report.ndjson',
        'json:reports/cucumber-report.json',
        'html:reports/report.html',
        'summary',
        'progress-bar',
    ],
    formatOptions: { snippetInterface: 'async-await' },
    worldParameters: getWorldParams(),
    publishQuiet: false,
};


export default config;