'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  gulp.src('./pio-preview.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(rename({
        extname: '.min.css'
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./pio-preview.scss', ['sass']);
});

var uglify = require('gulp-uglify');


gulp.task('js', function() {
  return gulp.src('pio-preview.js')
    .pipe(uglify({
        preserveComments: 'license'
    }))
    .pipe(rename({
        extname: '.min.js'
    }))
    .pipe(gulp.dest('dist'));
});