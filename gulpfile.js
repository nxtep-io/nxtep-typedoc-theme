var gulp = require('gulp');
var debug = require('gulp-debug');
var sass = require('gulp-sass');
var sourcesGlob=[
    './**/*.sass',
    './**/*.scss',
    "!./node_modules/**/*.*"
];

gulp.task('styles', function() {
    return gulp.src(sourcesGlob)
        .pipe(debug({title: "SASS:"}))
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

gulp.task('styles-watch', function() {
    gulp.watch(sourcesGlob, ['styles']);
});

