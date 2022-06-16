const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function buildStyles() {
  return gulp.src('./src/assets/sass/**/*.scss')
  .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/assets/css'));
};

exports.watch = function () {
  gulp.watch('./src/assets/sass/**/*.scss', buildStyles);
};

exports.default = buildStyles