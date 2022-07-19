const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    /* Para o laravel-mix entender que eastará sendo usado vueJS */
    /* Inicializando o processo de build do vueJS, através do webpack */
    .vue()
    .postCss('resources/css/app.css', 'public/css',
        [
            //
        ]);
