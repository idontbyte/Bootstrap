const { src, dest } = require('gulp');
const sass = require('gulp-sass'); 
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');


exports.sass = function() {
  return src('scss/**/*.scss')
    .pipe(sass())
    .pipe(dest('dist/css/'));
}

exports.js = function() {
  return src('js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify('main.js'))
    .pipe(dest('dist/js/'));
}