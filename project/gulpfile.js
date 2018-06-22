// 引入模块
const gulp = require("gulp"),
    minifyCss = require("gulp-clean-css"),
    uglify = require("gulp-uglify"),
    babel = require("gulp-babel"),
    connect = require("gulp-connect"),
    sass=require("gulp-sass");

// 定制gulp任务：压缩CSS
gulp.task("css", function(){
    gulp.src("src/css/*.css") // 源
           .pipe(minifyCss()) // 处理
           .pipe(gulp.dest("dist/css/")); // 目标
});

// 定制gulp任务：压缩JS
gulp.task("js", function(){
    gulp.src("src/js/*.js") // 源
           .pipe(babel({         // 将ES6代码转换为ES5代码
                presets: ['env']
            }))
           .pipe(uglify()) // 处理
           .pipe(gulp.dest("dist/js/")); // 目标
});

// 定制gulp任务：启动服务器
gulp.task("connect", function(){
    connect.server({
        root: 'src'
    });
}); 
// 定制任务：编译sass
gulp.task("sass-task", function(){
  gulp.src("sass/*.scss")
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(gulp.dest("css"));
});

// 监视
gulp.task("watch", function(){
  // 监视*.scss的修改，自动执行编译sass任务
  gulp.watch("sass/*.scss", ["sass-task"]);
});
