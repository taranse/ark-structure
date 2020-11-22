const gulp = require('gulp');
const inlineFonts = require('gulp-inline-fonts');
const concat = require('gulp-concat');
const merge = require('merge-stream');

gulp.task('fonts', () => {
  let fontStream = merge();
  [
    {name: 'ProximaNova-Light', weight: 300},
    {name: 'ProximaNova-Regular', weight: 400},
    {name: 'ProximaNova-Bold', weight: 700}
  ].forEach(({name, weight}) => {
    fontStream.add(
      gulp.src(`front/helpers/fonts/${name}.woff`)
        .pipe(inlineFonts({name: 'Proxima Nova', weight: weight, formats: ['woff']}))
    );
  });

  // [
  //   {name: 'PTSerif-Italic', weight: 400, style: 'italic'},
  //   {name: 'PTSerif-Regular', weight: 400, style: 'normal'},
  //   {name: 'PTSerif-Bold', weight: 700, style: 'normal'},
  //   {name: 'PTSerif-BoldItalic', weight: 700, style: 'italic'}
  // ].forEach(({name, weight, style}) => {
  //   fontStream.add(
  //     gulp.src(`front/helpers/fonts/${name}.ttf`)
  //       .pipe(inlineFonts({name: 'PT Serif', style, weight, formats: ['ttf']}))
  //   );
  // });
  //
  // fontStream.add(
  //   gulp.src(`front/helpers/fonts/BluuZima-Bold.woff2`)
  //     .pipe(inlineFonts({name: 'Bluu Zima', weight: 400, formats: ['woff2']}))
  // );

  return fontStream.pipe(concat('fonts.css')).pipe(gulp.dest('dist/fonts'));
});