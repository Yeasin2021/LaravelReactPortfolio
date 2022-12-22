const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css');

    // added this code for file load or include on react js file
    mix.webpackConfig({
        module: {
            rules: [
              {
                test: /\.(mp4|avi|pdf|mp3)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
            ],
          },
        })
