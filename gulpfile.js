'use strict';

// Modules for building the build system
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),    
    connect = require('gulp-connect'),
    merge = require('merge-stream'),
    path = require('path'),
    rename = require('gulp-rename'),
    rimraf = require('gulp-rimraf'),
    source = require('vinyl-source-stream'),
    through = require('through2');

// Modules for compiling/transpiling
var sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    marked = require('gulp-marked'),
    frontMatter = require('gulp-front-matter'),
    browserify = require('browserify'),
    streamify = require('gulp-streamify'),
    watchify = require('watchify');

//Modules for deployment
var deploy = require('gulp-gh-pages'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    cssmin = require('gulp-minify-css');


//
// Super Happy Funtime Build System Extraordinaire
// 

// Watch task (runs default on changes, runs LR)
gulp.task('watch', ['default'], function () {
  gulp.watch(['app/templates/**'], ['content'])
  gulp.watch(['app/styles/**'], ['styles'])
  gulp.watch(['app/images/**'], ['images'])
  gulp.watch(['app/posts/**'], ['posts', 'rss'])

  scripts(true)
  // LR crap
  connect.server({
    root: ['dist'],
    port: 9000,
    livereload: true
  })
})

// Styles task (compiles Sass)
gulp.task('styles', function () {
  gulp.src('app/styles/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css/app.css'));
});

// Images task (Moves images & media to /dist)
gulp.task('images', function () {
  return gulp.src('app/images/**')
    .pipe(gulp.dest('dist/images'))
    .pipe(connect.reload())
})