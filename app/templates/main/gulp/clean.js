const gulp = require('gulp');
const clean = require('gulp-clean');

gulp.task('clean', (done) =>
  gulp.src("./dist", {allowEmpty: true})
    .pipe(clean({force: true}))
);