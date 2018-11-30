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

// 图片资源转base64
const base64 = {
    baseDir: './dev',
    extensions: ['png', 'jpg', 'gif'],
    maxImageSize: 8 * 1024, // bytes
    debug: false
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
    uglify,
    imagemin,
    base64,
    stylus
}