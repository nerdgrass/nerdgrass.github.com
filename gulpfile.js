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