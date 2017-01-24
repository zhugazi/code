var
    gulp       = require('gulp'),
    minimist   = require('minimist'),
    plugins    = require('gulp-load-plugins'),
    configRoot = require('./config'),
    $          = plugins(),
    knownOptions = { //获取控制台执行的参数
        string: 'env',
        default: { env: process.env.NODE_ENV || 'pre' }
    },
    param      = minimist(process.argv.slice(2), knownOptions),
    
    //根据命令行控制台执行的参数设置相应的 config
    config     = (param.env === 'build') ? configRoot.prodConfig.build : configRoot.prodConfig.pre;

//输出目录添加版本号
version        = configRoot.version[(configRoot.version.length - 1)].v;
config.path    = config.path + '_' + version;


/*
+++++++++++++
clean  清理之前的版本
+++++++++++++
*/
gulp.task('Clean', function() {
    return gulp.src(config.path, { read: false })
        .pipe($.clean())
        .pipe($.notify({ message: 'clean task complete' }));
});
/*
+++++++++++++
copys  复制不需要处理的__temp**临时数据和文件
+++++++++++++
*/
gulp.task('Copys', function() {
    gulp.src(configRoot.devConfig.path + configRoot.devConfig.tempDataPath + '**/*.{html,json}')
        .pipe(gulp.dest(config.path + configRoot.devConfig.tempDataPath));

    return gulp.src(configRoot.devConfig.path + configRoot.devConfig.tempFilePath + '**/*.*')
        .pipe(gulp.dest(config.path + configRoot.devConfig.tempFilePath))
        .pipe($.if(config.min === true, $.notify({ message: 'Copys task complete' })));
});
/*
+++++++++++++
styles  编译sass、压缩CSS,
+++++++++++++
*/
gulp.task('Styles', function() {
    //

    //Sass、css文件
    return gulp.src(configRoot.devConfig.path + configRoot.devConfig.sassPath + '**/*.{scss,css}')
        .pipe($.if(config.min === true, $.sass({ outputStyle: 'compressed' }), $.sass({ outputStyle: 'expanded' }))) //编译SASS
        .pipe($.autoprefixer({
            browsers: ['last 2 versions','safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
            cascade: true, //是否美化属性值
            remove:true //是否去掉不必要的前缀
        }
        )) //添加浏览器兼容
        .pipe($.csslint()) //检查样式错误
        .pipe(gulp.dest(config.path + config.cssPath))
        .pipe($.if(config.min === true, $.rename({ suffix: '.min' })))
        .pipe($.if(config.min === true, $.cleanCss()))
        .pipe(gulp.dest(config.path + config.cssPath))
        .pipe($.if(config.min === true, $.notify({ message: 'styles task complete' }), $.livereload()));
});
/*
+++++++++++++
scripts  编译、压缩scripts,
+++++++++++++
*/
gulp.task('Scripts', function() {
    //不操作*.min.js文件
    gulp.src([configRoot.devConfig.path + configRoot.devConfig.jsPath + '**/*.js', '!' + configRoot.devConfig.path + configRoot.devConfig.jsPath + '**/*.min.js'])
        .pipe($.jshint())//检查JS错误
        .pipe($.jshint.reporter('default'))
        .pipe($.if(config.min === true, $.uglify({
            mangle: {except: ['require' ,'exports' ,'module' ,'$']},//类型：Boolean 默认：true 是否修改变量名
            compress: true,//类型：Boolean 默认：true 是否完全压缩
            preserveComments: 'false' //保留所有注释
        })))
        .pipe(gulp.dest(config.path + config.jsPath))
        .pipe($.if(config.min === true, $.rename({ suffix: '.min' })))
        .pipe(gulp.dest(config.path + config.jsPath));

    //移动*.min.js到相应生成目录
    return gulp.src(configRoot.devConfig.path + configRoot.devConfig.jsPath + '**/*.min.js')
        .pipe(gulp.dest(config.path + config.jsPath))
        .pipe($.if(config.min === true, $.notify({ message: 'Scripts task complete' }), $.livereload()))

});
/*
+++++++++++++
images 压缩图片
+++++++++++++
*/
gulp.task('Images', function() {
    return gulp.src(configRoot.devConfig.path + config.imagePath + '**/*.{png,jpg,gif,ico}')
        .pipe($.imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest(config.path + config.imagePath))
        .pipe($.if(config.min === true, $.notify({ message: 'Images task complete' })));
});
/*
+++++++++++++
Htmls include文件和压缩页面
+++++++++++++
*/
gulp.task('Htmls', function() {
    return gulp.src(configRoot.devConfig.path + configRoot.devConfig.htmlPath + '**/*.html')
        .pipe($.fileInclude({ prefix: '@@', basepath: '@file' })) //执行include引入文件
       // .pipe($.replace(/__REPATH__/, '.min'))
        .pipe($.if(config.min === true, $.cheerio({
            run: function($$, file) {
                var checkMin = function(s, ext) {
                        return (s.indexOf('.min.') > -1) ? s.split('.min') : s.split(ext);
                    }
                    //js
                $$('script[src!=""]').each(function() {
                    var __t = $$(this),
                        __s = __t.attr('src');
                    //是否本身含有.min
                    __s = checkMin(__s, '.js');

                    __t.attr('src', __s[0] + '.min.js');
                });
                //css
                $$('link').each(function() {
                    var __t = $$(this),
                        __s = __t.attr('href');
                    //是否本身含有.min
                    __s = checkMin(__s, '.css');

                    __t.attr('href', __s[0] + '.min.css');
                });
            },
            parserOptions: {
                decodeEntities: false
            }
        })))
        .pipe($.cheerio({
            run: function($$, file) {
                //向页面中添加版本信息
                $$('html').prepend('\n<!--! V' + version + '-->\n');
            },
            parserOptions: {
                decodeEntities: false
            }
        }))
        .pipe($.if(config.htmlCompress === true, $.htmlmin({ removeComments: true, collapseWhitespace: true }))) //是否执行压缩
        .pipe(gulp.dest(config.path + config.htmlPath))
        .pipe($.if(config.min === true, $.notify({ message: 'Htmls task complete' }), $.livereload()));
});
/*
+++++++++++++
Templates 复制模版
+++++++++++++
*/
gulp.task('Templates',function(){
    return gulp.src(configRoot.devConfig.path + configRoot.devConfig.templatePath + '**/*.html')
        .pipe(gulp.dest(config.path + config.templatePath));
});
/*
+++++++++++++
Templates 压缩模版  ,此版不做此部分，按原模式执行
+++++++++++++
*/
//gulp.task('Templates',function(){
//gulp.src(configRoot.devConfig.path + configRoot.devConfig.templatePath + '**/*.html')
//.pipe(gulp.dest(config.path + config.templatePath));
//});
/*
+++++++++++++
min-js-css 合并HTML中的JS和CSS文件
+++++++++++++
*/
//gulp.task('min-js-css', function() {
//return gulp.src(configRoot.devConfig.path + configRoot.devConfig.htmlPath + '**/*.html')
//.pipe($.useref())
//.pipe(gulp.dest(config.path + config.htmlPath));

//});

/*
+++++++++++++
default 默认启动
+++++++++++++
*/
gulp.task('default', ['Clean'], function() {
    gulp.start('Copys', 'Styles', 'Scripts', 'Images', 'Htmls','Templates');

    //开发下自动 添加监听
    if(param.env === 'pre') gulp.start('watch');

    //build下自动删除非压缩后的 非*.min.* 文件
    if(param.env === 'build') gulp.start('delNotMinFile');
});

/*
+++++++++++++
delNotMinFile 删除排 压缩 min 文件
+++++++++++++
*/
gulp.task('delNotMinFile',['Scripts','Styles'],function(){
    var __pathArr = [
        config.path + config.jsPath + '**/*.js',
        '!'+ config.path + config.jsPath + '**/*.min.js',
        config.path + config.cssPath + '**/*.css',
        '!'+ config.path + config.cssPath + '**/*.min.css',
    ]
    return gulp.src(__pathArr)
    .pipe($.clean());
});

// 看守
gulp.task('watch', function() {
    $.livereload.listen();

    //临时数据
    gulp.watch([configRoot.devConfig.path + configRoot.devConfig.tempDataPath + '**/*.{html,json}', configRoot.devConfig.path + configRoot.devConfig.tempFilePath + '**/*.*'], ['Copys'])
    //Views视图HTML
    gulp.watch(configRoot.devConfig.path + configRoot.devConfig.htmlPath + '**/*.html', ['Htmls']);
    //Sass
    gulp.watch(configRoot.devConfig.path + configRoot.devConfig.sassPath + '**/*.{scss,css}', ['Styles']);
    //Script
    gulp.watch(configRoot.devConfig.path + configRoot.devConfig.jsPath + '**/*.js', ['Scripts']);
    //样式图片
    gulp.watch(configRoot.devConfig.path + config.imagePath + '**/*.{png,jpg,gif,ico}', ['Images']);
    //模版文件
    gulp.watch(configRoot.devConfig.path + configRoot.devConfig.templatePath + '**/*.html', ['Templates']);
});
