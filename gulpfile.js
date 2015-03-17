var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var shell = require('gulp-shell');
var livereload = require('gulp-livereload');

gulp.task('npmInstall', shell.task([
  'npm install',
]));

gulp.task('compileSass', ['npmInstall'], function() {
  return sass('./public/sass/sass.scss', { style: 'compressed' })
    .pipe(gulp.dest('./public/stylesheets/'))
    .pipe(livereload());
});

gulp.task('watch', ['npmInstall', 'compileSass'], function() {
  var server = livereload();
  gulp.watch('./public/sass/sass.scss', ['compileSass']);
});

gulp.task('copyBowerComponents', ['npmInstall', 'compileSass', 'watch'], function () {
  gulp.src('./bower_components/**')
    .pipe(gulp.dest('./public/bower_components'));
});

gulp.task('start', ['npmInstall', 'compileSass', 'watch', 'copyBowerComponents'], shell.task([
  'npm install',
  'node ./bin/www'
]));

gulp.task('default', ['compileSass', 'watch', 'copyBowerComponents', 'start']);
