var gulp = require("gulp");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var cssnano = require("gulp-cssnano");
var imagemin = require("gulp-imagemin");

gulp.task("sass", function() {
  return gulp
    .src("src/scss/style.scss")
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest("dist/css"));
});

gulp.task("js", function() {
  return gulp
    .src("src/js/*.js")
    .pipe(concat("scripts.js"))
    .pipe(rename("scripts.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("images", function() {
  return gulp
    .src("src/images/**/*.+(png|jpg|gif|svg)")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"));
});

gulp.task("watch", function() {
  gulp.watch("src/scss/**/*.scss", ["sass"]);
  gulp.watch("src/js/*.js", ["js"]);
  gulp.watch("src/images/**", function(event) {
    gulp.run("images");
  });
});
