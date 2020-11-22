const gulp = require('gulp');
const browse_sync = require('browser-sync');

require('./gulp/scss.js');
require('./gulp/edge.js');
require('./gulp/clean.js');
require('./gulp/fonts.js');
require('./gulp/script.js');

const image = require('gulp-image');
// const jade = require('gulp-jade');
// const clean = require('gulp-clean');
// const babel = require('gulp-babel');

const browserSync = browse_sync.create();

gulp.task('images', () =>
  gulp.src("front/images/*")
    .pipe(image())
    .pipe(gulp.dest("dist/images"))
);

gulp.task('server', gulp.series(['clean', 'sass', 'edge', 'js', 'images', 'fonts'], () => {
  browserSync.init({server: "./dist"});

  gulp.watch("front/**/*.scss", gulp.series('sass')).on('change', browserSync.reload);
  gulp.watch("front/js/*.js", gulp.series('js')).on('change', browserSync.reload);
  gulp.watch("front/images/*", gulp.series('images')).on('change', browserSync.reload);
  gulp.watch("front/templates/**/*.edge", gulp.series('edge')).on('change', browserSync.reload);
  gulp.watch("data/*.js", gulp.series('edge')).on('change', browserSync.reload);
}));


gulp.task('default', gulp.series('server'));