var path = require("path");
var gulp = require('gulp');
var less = require("gulp-less");
//var uglify = require('gulp-uglify');// 获取 uglify 模块（用于压缩 JS）


var browserSync = require('browser-sync').create();
var proxyMiddleware = require('http-proxy-middleware');

var build = require("./build/build.js");

//源码目录
var srcDir = path.resolve(__dirname, 'src');
//输出目录
var outDir = path.resolve(__dirname, 'out');

//获取html编译函数
var out = build(srcDir, outDir);

//copy 资源文件
gulp.task("lib", function(){
    return gulp.src([srcDir + "/lib/**/*"])
        .pipe(gulp.dest(outDir + "/lib"))
});

gulp.task("css", function(){
    return gulp.src([srcDir + "/css/**/*"])
        .pipe(gulp.dest(outDir + "/css"))
});

gulp.task("js", function(){
    return gulp.src([srcDir + "/js/**/*"])
        .pipe(gulp.dest(outDir + "/js"))
});

gulp.task("img", function(){
    return gulp.src([srcDir + "/img/**/*"])
        .pipe(gulp.dest(outDir + "/img"))
});

gulp.task("less", function(){
    gulp.src(srcDir + "/less/page.*.less")
    .pipe(less())
    .pipe(gulp.dest(outDir + "/css"))
});

gulp.task("html", function(){
    out("index.page.art", "index.html");
    out("course.page.art", "course.html");
    out("teachers.page.art", "teachers.html");
    out("share.page.art", "share.html");
    out("service.page.art", "service.html");
    out("free.page.art", "free.html");
    out("aboutUs.page.art","aboutUs.html");
    out("shareDetails.page.art","shareDetails.html");
});

// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
//gulp.task('script', function() {
//    // 1\. 找到文件
//    gulp.src([srcDir + "/js/page.index.js"])
//        .pipe(babel())
//        // 2\. 压缩文件
//        .pipe(uglify())
//        // 3\. 另存压缩后的文件
//        .pipe(gulp.dest('js'))
//});
/**
 * 代理设置
 * 
 */
var middleware = proxyMiddleware('/api', {
  target: 'http://website.jianxc.com/jxcwebsite',
  changeOrigin: true,
  pathRewrite: {
    '^/api': ''
  },
  logLevel: 'debug'
})

gulp.task("browser-sync", function(){
  browserSync.init({
    ui: false,
    open: false,
    notify: false,
    // ghostMode: {
    //   clicks: true,
    //   forms: true,
    //   scroll: false
    // },
    server: {
        baseDir: "./out",
        index: 'index.html',
        middleware: middleware
    }
  });
});

gulp.task('default', ["css", "less", "js", "img", "lib", "html", "browser-sync"], function() {
   console.log("执行完成！")
});

//文件变更监控
var htmlWatcher = gulp.watch([srcDir + "/**/*.art", srcDir + "/components/**/*"],["html"])
gulp.watch(srcDir + "/js/**/*", ["js"])
gulp.watch(srcDir + "/css/**/*", ["css"])
gulp.watch(srcDir + "/img/**/*", ["img"])
gulp.watch(srcDir + "/less/**/*", ["less"])
gulp.watch(srcDir + "/less/**/*", ["less"])
gulp.watch(outDir + "/**/*", browserSync.reload)

htmlWatcher.on("change", function(event){
    console.log("文件改变：" + event.path)
})