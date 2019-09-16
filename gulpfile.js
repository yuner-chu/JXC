var path = require("path")
var gulp = require('gulp');
var less = require("gulp-less")

var build = require("./build/build.js")

//源码目录
var srcDir = path.resolve(__dirname, 'src')
//输出目录
var outDir = path.resolve(__dirname, 'out')

//获取html编译函数
var out = build(srcDir, outDir)

//copy 资源文件
gulp.task("lib", function(){
    return gulp.src([srcDir + "/lib/**/*"])
        .pipe(gulp.dest(outDir + "/lib"))
})

gulp.task("css", function(){
    return gulp.src([srcDir + "/css/**/*"])
        .pipe(gulp.dest(outDir + "/css"))
})

gulp.task("js", function(){
    return gulp.src([srcDir + "/js/**/*"])
        .pipe(gulp.dest(outDir + "/js"))
})

gulp.task("img", function(){
    return gulp.src([srcDir + "/img/**/*"])
        .pipe(gulp.dest(outDir + "/img"))
})

gulp.task("less", function(){
    gulp.src(srcDir + "/less/page.*.less")
    .pipe(less())
    .pipe(gulp.dest(outDir + "/css"))
})

gulp.task("html", function(){
    out("index.page.art", "index.html")
    out("index1.page.art", "index1.html")
    out("course.page.art", "course.html")
})

gulp.task('default', ["css", "less", "js", "img", "lib", "html"], function() {
   console.log("执行完成！")
});

//文件变更监控
var htmlWatcher = gulp.watch([srcDir + "/**/*.art", srcDir + "/components/**/*"], ["html"])
gulp.watch(srcDir + "/js/**/*", ["js"])
gulp.watch(srcDir + "/css/**/*", ["css"])
gulp.watch(srcDir + "/img/**/*", ["img"])
gulp.watch(srcDir + "/less/**/*", ["less"])
gulp.watch(srcDir + "/less/**/*", ["less"])

htmlWatcher.on("change", function(event){
    console.log("文件改变：" + event.path)
})