const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

gulp.task("build-js", () => {
  return gulp
    .src([
      "./guacamole-common-js/src/main/webapp/modules/**/*",
    ])
    .pipe(concat("guacamole-common-js.all.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js/"));
});
