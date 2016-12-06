'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');	// synch browser and code changes		
var lint = require('gulp-eslint');					// lint JS files
var imagemin = require('gulp-imagemin');		// optimizing images
var rename = require('gulp-rename');				// optimizing js
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
		angularControllersJs: "scripts/controllers/*.js",
		libJavascript: "scripts/lib/*.js"
	}
}

// destination configuration object
var destConfig = {
	paths: {
		images: 'dist/images',
		javascript: 'dist/scripts',
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
gulp.task('scripts', ['controller-scripts','lib-scripts'], function() {
  return gulp.src(config.paths.javascript)
    .pipe(concat('bundle.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest(destConfig.paths.javascript))
});

// scripts task
gulp.task('controller-scripts', function() {
  return gulp.src(config.paths.angularControllersJs)
    .pipe(concat('controllerBundle.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest(destConfig.paths.javascript))
});

// lib-scripts task
gulp.task('lib-scripts', function() {
  return gulp.src(config.paths.libJavascript)
    .pipe(concat('libBundle.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest(destConfig.paths.libJavascript))
});

// linting task
gulp.task('lint', function() {
	return gulp.src(config.paths.javascript)
		.pipe(lint({config: 'eslint.config.json'}))
		.pipe(lint.format());
});

// watch task for any html/js changes
gulp.task('watch', function() {
	gulp.watch(config.paths.js, ['lint']);
	gulp.watch(config.paths.angularControllersJs, ['lint']);
	gulp.watch(config.paths.javascript, ['scripts']);
	gulp.watch(config.paths.angularControllersJs, ['controller-scripts']);
	gulp.watch(config.paths.images, ['images']);
});

// default gulp tasks
gulp.task('default', ['browser-sync', 'watch'], function () {});
