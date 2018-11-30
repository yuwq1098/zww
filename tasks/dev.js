import gulp from "gulp";
import runSequence from 'run-sequence';       // 设定同步异步执行任务
import filter from "gulp-filter";             // 文件筛选
import concat from "gulp-concat";             // 合并文件
import rename from "gulp-rename";             // 文件重命名
import stylus from 'gulp-stylus';             // 编译 stylus
import base64 from 'gulp-base64';             // 图片转换成Base64编码
import autoprefixer from 'gulp-autoprefixer'; // css 浏览器前缀补全
import babel from "gulp-babel";               // 编译 es6 代码
import useref from "gulp-useref";             // 引用替换
import uglify from "gulp-uglify";             // js压缩    
import csso from "gulp-csso";                 // css 压缩
import imagemin from "gulp-imagemin";         // 图片 压缩
import plumber from "gulp-plumber";           // 防止出错后的中断
import del from "del";                        // 删除文件
import rev from "gulp-rev";                   // 版本号生成插件
import revCollector  from "gulp-rev-collector";    // 替换版本号路径插件

import browserSc from "browser-sync";         // 静态服务器
const browserSync = browserSc.create();
const reload = browserSync.reload;

import config from "../config/config.base";   // 引入gulp 插件的配置文件

// 路径配置
const base_src = './app' 
const base_dist = './dev' 
const css_path = './app/styles/**/*{.styl,.css}'
const js_path = './app/**/*.js'
const img_path = './app/imgs/**/*.{png, jpg, gif, svg}'
const view_path = './app/**/*.html'

// css处理
gulp.task('css',function() {
    return gulp.src(css_path)
        .pipe(plumber())
        .pipe(stylus(config.stylus))
        .pipe(autoprefixer(config.autofx))
        .pipe(base64(config.base64))
        .pipe(csso())
        .pipe(rev())               //定义一个流，将所有匹配到的文件名全部生成相应的版本号
        .pipe(gulp.dest(base_dist + '/styles'))
        .pipe(rev.manifest())      //把所有生成的带版本号的文件名保存到json文件中
        .pipe(gulp.dest('./dev/rev/css'))  //把json文件保存到指定的路径，自己记住就好
        .pipe(reload({ stream: true }));
});

// js处理
gulp.task('js',function() {
    return gulp.src(js_path)
        .pipe(babel())
		.pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest(base_dist))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./dev/rev/js'))
        .pipe(reload({ stream: true }));
});

// 图片处理
gulp.task('images', function () {
    return gulp.src(img_path)
        .pipe(imagemin(config.imagemin))
        .pipe(gulp.dest('./dev/imgs'))
        .pipe(reload({ stream: true }));
});

// view页面处理
gulp.task('views',function() {
    return gulp.src(view_path)
        .pipe(useref())
		.pipe(gulp.dest('./dev'))
        .pipe(reload({ stream: true }));
});

// 文件版本号更新
gulp.task('version', function(){   
    return gulp.src(['./dev/rev/**/*.json','./dev/**/*.html'])
    .pipe(revCollector({
        replaceReved: true
    }))
    .pipe(gulp.dest('./dev')); //html更换css,js文件版本，更改完成之后保存的地址
})

// 清空文件夹
gulp.task('clean',function () {
    return del(['./dev']);                               // 构建前先删除dev文件里的旧版本
})

// 静态服务器
gulp.task('reload',function () {
    browserSync.init({          // 启动Browsersync服务
        server: {
            baseDir: './dev',   // 启动服务的目录 默认 index.html    
            index: 'index.html' // 自定义启动文件名
        },
        port: 3002,             // 端口号
        open: 'external',       // 决定Browsersync启动时自动打开的网址 external 表示 可外部打开 url, 可以在同一 wifi 下不同终端测试
        injectChanges: true     // 注入CSS改变
    });
})

// css文件监听
gulp.task('watch-css',function () {
    runSequence('css', 'version')
})

// js文件监听
gulp.task('watch-js',function () {
    runSequence('js', 'version')
})

// view文件监听
gulp.task('views-js',function () {
    runSequence('views', 'version')
})

// 监听文件改动
gulp.task('watch',function () {
    gulp.watch(css_path, ['watch-css']);
    gulp.watch(js_path, ['watch-js']);
    gulp.watch(img_path, ['images']);
    gulp.watch(view_path, ['views-js']).on('change', reload);
})

// 开发监控
gulp.task('dev',function () {
    // [] 中任务是并行的，其他按照先后顺序执行
    runSequence('clean', ['js', 'css', 'images'], 'views', 'version', 'reload', 'watch')
})


