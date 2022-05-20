/* Set webpack variables */

var webpackParams = {
    // Input file path
    entryPath: ['./public/assets/src/scss/main.scss', './public/assets/src/js/main.js'],

    // Output for CSS and JS
    jsOutputPath: './public/assets/dist/js/main.js',
    cssOutputPath: './public/assets/dist/css/main.css',

};

module.exports = {webpackParams};

