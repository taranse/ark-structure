const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')

gulp.task('sass', () => {
  return gulp.src([
    './node_modules/swiper/swiper-bundle.css',
    "./node_modules/animate.css/animate.css",
    "./front/helpers/style/_variables.scss",
    "./front/helpers/style/_theme.scss",
    "./front/helpers/style/*.scss",
    './front/templates/**/*.scss',
    "./front/scss/**/*.scss"
  ])
    .pipe(concat('build.scss'))
    .pipe(sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }))
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('.'))
    .pipe(rename('build.css'))
    .pipe(gulp.dest("dist/css"))
});