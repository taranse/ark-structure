const gulp = require('gulp');
const babel = require('gulp-babel');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
const webpack = require('webpack-stream');

const babelConfig = [
  {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    }
  }
];

gulp.task('js_webpack', () =>
  gulp.src([
    // 'node_modules/axios/dist/axios.js',
    // 'node_modules/typograf/dist/typograf.js',
    // 'node_modules/swiper/swiper-bundle.min.js',
    // 'node_modules/jquery/dist/jquery.js',
    "front/js/app.js"
  ])
    .pipe(webpack({
      output: {
        filename: 'app.js'
      },
      devtool: false,
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: babelConfig
          }
        ]
      }
    }))

    .pipe(gulp.dest('dist/js/'))
)

gulp.task('js_other', () =>
  gulp.src([
    // 'node_modules/axios/dist/axios.js',
    // 'node_modules/typograf/dist/typograf.js',
    'node_modules/jquery/dist/jquery.js',
    'node_modules/waypoints/lib/jquery.waypoints.js',
    'node_modules/jquery-touchswipe/jquery.touchSwipe.js',
    'node_modules/jquery-parallax.js/parallax.js',
  ])
    .pipe(concat('build.js'))
    .pipe(babel())
    .pipe(minify())
    .pipe(gulp.dest('dist/js/'))
)

gulp.task('js', gulp.series(['js_other']), () => {});