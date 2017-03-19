const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

const src = {
  scss: 'src/styles/**/*.scss',
  css: 'dist/css',
  html: 'dist/index.html'
};

gulp.task('serve', ['sass'], () => {
  browserSync.init({
    proxy: 'localhost:8080'
  });

  gulp.watch(src.scss, ['sass']);
});

gulp.task('sass', function() {
  return gulp
    .src(src.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(src.css))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
