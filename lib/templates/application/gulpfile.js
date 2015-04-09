var path = require('path');
var gulp = require('gulp');
var webpack = require('gulp-webpack');
var less = require('gulp-less');
var svgSprite = require('gulp-svg-sprite');

// default gulp task
gulp.task('default', ['less', 'webpack'], function() {});

gulp.task('less', function() {
  return gulp.src('./content/less/main.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('./content/dist'));
  combined.on('error', console.error.bind(console));
});

gulp.task('webpack', function() {
  return gulp.src('Content/scripts/main.js')
    .pipe(webpack(
      require('./dev.webpack.js')
    ))
    .pipe(gulp.dest('Content/dist/'));
});



gulp.task('sprite', function() {
  // More complex configuration example
  var config = {
    mode: {
      css: { // Create a «css» sprite
        render: {
          scss: true // Render a Sass stylesheet
        }
      }
    }
  };

  return gulp.src('Content/svg/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('Content/dist/'));
});
