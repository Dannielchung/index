var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var runSequence = require('run-sequence').use(gulp);
var del = require('del');

gulp.task('compass', function() {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            sourcemap: true,
            time: true,
            css: 'src/stylesheets',
            sass: 'src/sass',
            style: 'compact' //nested, expanded, compact, compressed
        }))
        .on('error',function(err){
            console.log(err);
            this.emit('end');
        })
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.stream());
});
// Static Server + watching scss/html files
gulp.task('serve', ['compass'], function() {

    browserSync.init({
        server: "./dist",
        port: 8888
    });

    gulp.watch("src/**/*.scss", ['compass']);
    // gulp.watch("src/*.html" ,browserSync.reload);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});


gulp.task('default', function() {
    return runSequence(['clean'], ['build'], ['serve', 'watch']);
});

gulp.task('clean', function(callback) {
    return del('./dist/', callback);
});

gulp.task('build', function(callback) {
    return runSequence(['staticFiles', 'compass'], callback);
});

// gulp.task('html', function() {
//     return gulp.src('./src/**/*.html')
//         .pipe(gulp.dest('./dist/'));
// });

gulp.task('staticFiles', function() {
    return gulp.src([
        './src/**/*.html'
        ,'./src/images*/**/*.*'
        ])
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.scss', ['compass']);
    gulp.watch('./src/**/*.html', ['staticFiles']);
    gulp.watch(['./src/**/*.html', './src/**/*.scss'],
        function() {
            return runSequence(['build'], ['reload']);
        });

});

gulp.task('reload', function() {
    return browserSync.reload();
});
