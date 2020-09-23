const gulp = require('gulp')
const gulpSass = require('gulp-sass')
 
gulpSass.compiler = require('node-sass')

const sass = () =>
  gulp.src('./assets/scss/style.scss')
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(gulp.dest('./assets/css'))

const sassWatch = () =>
  gulp.watch('./assets/scss/style.scss', ['sass'])

exports.sass = sass
exports.sassWatch = sassWatch
exports.default = sassWatch
