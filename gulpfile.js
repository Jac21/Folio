'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');	// sync browser and code changes		
var lint = require('gulp-eslint');					// lint JS files
var imagemin = require('gulp-imagemin');		// optimizing images
var rename = require('gulp-rename');				// optimizing js
var sourcemaps = require('gulp-sourcemaps'); // sourcemapping!
var uncss = require('gulp-uncss');			// shedding CSS!
var crass = require('gulp-crass');			// minifying CSS!
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// configuration object
var config = {
	proxyUrl: "http://localhost:8080",
	browser: "google chrome",
	port: 7000,
	paths: {
		files: "**/*.*",
		images: "images/**/*.*",
		javascript: "scripts/*.js",
		styles: "styles/*.css",
		angularControllersJs: "scripts/controllers/*.js",
		libJavascript: "scripts/lib/*.js"
	}
}

// destination configuration object
var destConfig = {
	paths: {
		images: 'dist/images',
		javascript: 'dist/scripts',
		styles: 'dist/styles',
		stylesUncss: 'dist/stylesUncss',
		libJavascript: 'dist/scripts/lib'
	}
}

// browser-sync task
gulp.task('browser-sync', function() {
	browserSync.init({
        files: [config.paths.files],
        browser: config.browser,
        port: config.port,
        server: {
        	baseDir: './'
        }
	});
});

// image task
gulp.task('images', function() {
	return gulp.src(config.paths.images)
	.pipe(imagemin({progressive : true}))
	.pipe(gulp.dest(destConfig.paths.images));
});

// scripts task
gulp.task('scripts', ['controller-scripts'], function() {
  return gulp.src(config.paths.javascript)
    .pipe(concat('bundle.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest(destConfig.paths.javascript))
});

// scripts task
gulp.task('controller-scripts', function() {
  return gulp.src(config.paths.angularControllersJs)
    .pipe(sourcemaps.init())
    .pipe(concat('controllerBundle.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(destConfig.paths.javascript))
});

// linting task
gulp.task('lint', function() {
	return gulp.src(config.paths.javascript)
		.pipe(lint({config: 'eslint.config.json'}))
		.pipe(lint.format());
});

//uncss-ing task
gulp.task('uncss', function () {
    return gulp.src(config.paths.styles)
        .pipe(uncss({
            html: ['index.html', 'templates/**/*.html']
        }))
        .pipe(gulp.dest(destConfig.paths.stylesUncss));
});

// crass, used for CSS minification
gulp.task('crass', function() {
  return gulp.src(config.paths.styles)
        .pipe(crass({pretty:false}))
        .pipe(gulp.dest(destConfig.paths.styles));
});

// watch task for any html/js changes
gulp.task('watch', function() {
	gulp.watch(config.paths.js, ['lint']);
	gulp.watch(config.paths.angularControllersJs, ['lint']);
	gulp.watch(config.paths.javascript, ['scripts']);
	gulp.watch(config.paths.angularControllersJs, ['controller-scripts']);
	gulp.watch(config.paths.images, ['images']);
	gulp.watch(config.paths.styles, ['uncss']);
	gulp.watch(config.paths.styles, ['crass']);
});

// default gulp tasks
gulp.task('default', ['browser-sync', 'watch'], function () {});
