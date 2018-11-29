/*
   gulp 插件的配置文件
*/

// gulp-htmlmin
const htmlmin = {
    removeComments: true,
    collapseWhitespace: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    minifyJS: true,
    minifyCSS: true
};

// gulp-autoprefixer 自动添加前缀
const autofx = {
    browsers: ['last 2 versions'],
    cascade: false
};

// gulp-clean-css 压缩 css
const cleanCSS = {
    compatibility: 'ie8',
    keepSpecialComments: '*'
};

// gulp-imagemin 压缩图片
const imagemin = {
    interlaced: true,
    progressive: true,
    optimizationLevel: 5,
    svgoPlugins: [
        {
            removeViewBox: true
        }
    ]
}

// gulp-uglify 压缩 js
const uglify = {
    mangle: {
        except: ['require', 'exports', 'module', '$']
    }
};

// gulp-stylus  stylus预编译
const stylus = {
    'compress': true,
    'linenos': true,
    'include css': true
};

// 批量导出
export default {
    htmlmin,
    autofx,
    cleanCSS,
    uglify,
    imagemin,
    stylus
}