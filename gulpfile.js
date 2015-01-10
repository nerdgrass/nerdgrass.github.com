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
    // jade = require('gulp-jade'),
    // marked = require('gulp-marked'),
    // frontMatter = require('gulp-front-matter'),
    browserify = require('browserify'),
    streamify = require('gulp-streamify'),
    watchify = require('watchify');

//Modules for deployment
var deploy = require('gulp-gh-pages'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    cssmin = require('gulp-minify-css');

// Site info
// var site = {
//     'title': 'Alex Boerstler Design &amp; Development',
//     'url': 'http://localhost:9000',
//     'urlRoot': '/',
//     'author': 'Alex Boerstler',
//     'email': 'alex@nerdgrass.com',
//     'time': new Date()
// }


//
// Super Happy Funtime Build System Extraordinaire
// 

// Default Task
gulp.task('default', ['images', 'styles', 'favicon', 'html'])

// Watch task (runs default on changes, runs LR)
gulp.task('watch', ['default'], function () {
  // gulp.watch(['app/templates/**'], ['templates'])
  gulp.watch(['app/styles/**'], ['styles'])
  gulp.watch(['app/images/**'], ['images'])
  gulp.watch(['app/index.html'], ['html'])
  // gulp.watch(['app/posts/**'], ['posts', 'rss'])

  // scripts(true)
  // LR crap
  connect.server({
    root: ['dist'],
    port: 9000,
    livereload: true
  })
})

// Styles task (compiles Sass)
gulp.task('styles', ['cleanstyles'], function () {
  gulp.src('app/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/styles'));
});

// Images task (Moves images & media to /dist)
gulp.task('images', function () {
  return gulp.src('app/images/**')
    .pipe(gulp.dest('dist/images'))
    .pipe(connect.reload())
})

// HTML task (Moves index.html to /dist)
gulp.task('html', function () {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload())
})

// Favicon task (Moves favicon to dist)
gulp.task('favicon', ['cleanfavicon'], function () {
  return gulp.src('assets/favicon.ico')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
})

// Scripts task
// function scripts(watch) {
//   var args = watch ? _.clone(watchify.args) : {}
//   args.debug = DEBUG

//   var bundler = browserify('./app/scripts/app.js', args)

//   if (watch) {
//     bundler = watchify(bundler)
//   }

//   function rebundle() {
//     gutil.log('Bundling... ')

//     return bundler.bundle()
//       // log errors if they happen
//       .on('error', function(e) {
//         gutil.log('Browserify Error', e)
//       })
//       .pipe(source('app.js'))
//       .pipe(gulpif(!DEBUG, streamify(uglify())))
//       .pipe(gulp.dest('./dist/scripts'))
//       .pipe(connect.reload())
//   }

//   bundler.on('update', rebundle)
//   return rebundle()
// }

// Templates task
// gulp.task('templates', function() {
//   var YOUR_LOCALS = {};

//   gulp.src('app/templates/*.jade')
//     .pipe(jade({
//       locals: YOUR_LOCALS
//     }))
//     .pipe(gulp.dest('dist/'))
// });


// Posts task
// gulp.task('posts', ['cleanposts'], function () {
//   return gulp.src('app/posts/*.md')
//     .pipe(frontMatter({property: 'page', remove: true}))
//     .pipe(marked())
//     .pipe(summarize('<!--more-->'))
//     // Collect all the posts and place them on the site object.
//     .pipe((function () {
//       var posts = []
//       var tags = []
//       return through.obj(function (file, enc, cb) {
//         file.page.url = 'posts/' + path.basename(file.path, '.md')
//         posts.push(file.page)
//         posts[posts.length - 1].content = file.contents.toString()

//         if (file.page.tags) {
//           file.page.tags.forEach(function (tag) {
//             if (tags.indexOf(tag) === -1) {
//               tags.push(tag)
//             }
//           })
//         }

//         this.push(file)
//         cb()
//       },
//       function (cb) {
//         posts.sort(function (a, b) {
//           return b.date - a.date
//         })
//         site.posts = posts
//         site.tags = tags
//         cb()
//       })
//     })())
//     .pipe(applyTemplate('app/templates/post.html'))
//     .pipe(gulp.dest('dist/posts'))
//     .pipe(connect.reload())
// })

// Cleaning Tasks
gulp.task('clean', function() {
  return gulp.src('dist', {read: false})
    .pipe(rimraf())
})
gulp.task('cleanstyles', function () {
  return gulp.src(['dist/styles'], {read: false})
    .pipe(rimraf())
})
gulp.task('cleanscripts', function () {
  return gulp.src(['dist/scripts'], {read: false})
    .pipe(rimraf())
})
// gulp.task('cleanposts', function () {
//   return gulp.src(['dist/posts'], {read: false})
//     .pipe(rimraf())
// })
gulp.task('cleanimages', function () {
  return gulp.src(['dist/images'], {read: false})
    .pipe(rimraf())
})
gulp.task('cleanfavicon', function () {
  return gulp.src(['dist/favicon.ico'], {read: false})
    .pipe(rimraf())
})