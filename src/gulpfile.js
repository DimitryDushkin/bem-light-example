var gulp = require('gulp'),
    terminal = require('child_process'),
    browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: { baseDir: "../dist" }
    });
});

gulp.task('enb', function() {
    terminal.exec("enb make", {}, function(error,stdout,stderr){
         browserSync.reload();
    });
});

gulp.task('watch', function() {
    gulp.watch('blocks/**/*.styl', ['enb']);
    gulp.watch('blocks/**/*.js', ['enb']);
});

gulp.task('default', ['browser-sync', 'watch']);
