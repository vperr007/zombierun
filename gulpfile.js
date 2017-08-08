var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp        = require('child_process');
var pug        = require('gulp-pug');
// var jade        = require('gulp-jade');





/**
 * Wait for jekyll-build, then launch the Server
 */

 //added rebuild v
gulp.task('serve', ['sass', 'pug'], function() {
    browserSync.init({
      server: true
    });

    gulp.watch('sass/**/*.sass', ['sass']);
    gulp.watch('pug/*.pug', ['pug']);
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('sass/**/*.+(sass|scss)')
        .pipe(sass())
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());

        // .pipe(gulp.dest('css/_assets/'));
});

/*
* Jade files
*/
gulp.task('pug', function(){
  return gulp.src('pug/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('_includes'))
  .pipe(browserSync.reload({stream:true}));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('sass/assets/*.sass', ['sass']);
    gulp.watch('pug/*.pug', ['pug']);
    gulp.watch('sass/main.sass');
    // gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html'], ['jekyll-rebuild']);
    // gulp.watch(['*.js', 'js/*.js'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['serve', 'watch']);
