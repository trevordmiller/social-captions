module.exports =  function (config) {

    config.set({
        basePath: './',

        files: [
    		'./src/**/*.js'
        ],

        preprocessors: {
        	'./src/**/*.js': ['browserify']
        },

        browserify: {
			debug: true,
			transform: ['babelify']
		},

        browsers: ['PhantomJS'],
        frameworks: ['mocha', 'chai', 'browserify'],
        reporters: ['spec'],
        port: 9876,
        colors: true
    });
};
