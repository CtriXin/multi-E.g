# 自动化工程 Gulp

1.    首先，全局安装gulp 

                             `npm install -g gulp`

2.    进入所在项目，创建package.json文件，以存储插件

                             进入控制台，`npm init`

3.    可选操作：

      + 3.1 自己手动安装插件
      + 3.2 `npm install`

4.    创建gulpfile.js

5.    粘贴下列任务


```javascript
//执行任务: gulp 任务

// 引入 gulp
var gulp = require('gulp');

// 引入组件
// 载入外挂
var sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    minifyCss = require('gulp-minify-css'),
    cssnano = require('gulp-cssnano'),
    cleanCss = require('gulp-clean-css'),
    plumber  = require('gulp-plumber'),
    zip = require('gulp-zip'),
    pngquant   = require('imagemin-pngquant'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    runSequence = require('run-sequence'),
    spritesmith = require('gulp.spritesmith');




var buildDir = 'build/';
var config = {
    projectName : 'test',
    buildDir: buildDir,
    cssPath: ['css/*.css'],
    sassPath: ['css/*.scss'],
    jsPath: ['js/**/*.js'],

    imgPath: ['static/img/**/*'],
    libPath: ['static/lib/**/*'],
    imgMovePath:  ['static/img/'],
    
    //修改图片位置
    spritesSource: './static/sprite/spriteOrignal/*.*',
    spritesMithConfig: {
        imgName: '../sprite/sprite.png',
        cssName: 'sprite.scss',
        cssFormat: 'scss'
    },
    spritesImgOutputPath: './static/sprite/',
    spritesCssOutputPath: './static/sass/'
};




// 样式
gulp.task('styles', function() {
    return gulp.src('css/*.scss')
        .pipe(sass({style: 'expanded' }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('package/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('package/styles'))
        .pipe(notify({ message: 'Styles task complete' }));
});


// 自动压缩js代码并且重命名
// 定义一个任务compress-js,压缩static文件夹下面的xx.js,并且重命名为xx.min.js,保存到./dist文件夹下面
gulp.task('compress-js', function() {
    gulp.src('js/**/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(reload({stream: true}))
        .pipe(gulp.dest('package/js'))
        .pipe(notify({ message: 'compress-js task complete' }));
});


// 图片
gulp.task('images', function() {
    return gulp.src('src/images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/images'))
        .pipe(notify({ message: 'Images task complete' }));
});


gulp.task('compress-css', function() {
    return gulp.src(config.cssPath, {base: 'static'})
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))  //====>加后缀.min
        .pipe(reload({stream: true}))
        .pipe(gulp.dest(config.buildDir));
});




// Sass任务
// Sass任务会编译scss/目录下的scss文件，并把编译完成的css文件保存到/css目录中。
gulp.task('sass', function() {
    gulp.src(config.sassPath, {base: 'static'})
        .pipe(sass())
        .pipe(reload({stream: true}))
        .pipe(gulp.dest(config.buildDir));
});



//css sprite 总命令
gulp.task('sprite', function(callback) {
    runSequence(
        'sprite:build',
        'sprite:minify',
        'sprite:move',
        callback
    )
});


gulp.task('AutoFx', function () {
    gulp.src(config.cssPath, {base: 'static'})
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest(config.buildDir));
});





/**
 * 监听文件变化
 */
gulp.task('watch', function () {
    gulp.watch(config.cssPath, ['compress-css']);
    gulp.watch(config.sassPath, ['sass']);
    gulp.watch(config.jsPath, ['compress-js']);

});



// 自动合并文件
// 合并src下面的js文件，重命名为all.js，保存在./dist文件夹下面
gulp.task('merge', function (){
    return gulp.src('./static/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js'))
});


// 合并压缩输出 js任务
// minify-js任务会合并static/目录下得所有得js文件并输出到./dist/目录，然后gulp会重命名、压缩合并的文件，也输出到./dist/目录。
gulp.task('minify-js', function() {
    gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});


//压缩图片
gulp.task('Imagemin', function () {
    gulp.src('./static/img/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        }))
        .pipe(gulp.dest(config.buildDir));
});


// 只压缩修改的图片。
// 压缩图片时比较耗时，在很多情况下我们只修改了某些图片，没有必要压缩所有图片，使用”gulp-cache”只压缩修改的图片，没有修改的图片直接从缓存文件读取。
gulp.task('testImagemin', function () {
    gulp.src('./static/img/*.{png,jpg,gif,ico}')
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('./build/img'));
});


//清理
gulp.task('clean', function () {
    return gulp.src('build/', {read: false})
        .pipe(clean());
});


/*
 精灵图使用实例
 在sprite.scss同级别的scss文件中,
 @import './sprite/sprite.scss'
 引用scss,然后直接使用
 .baby{
 @include sprite($arrow-bottom);
 }

 .icon{
 display: inline-block;
 }
 */
//css sprite 总命令
gulp.task('sprite', function(callback) {
    runSequence(
        'sprite:build',
        'sprite:minify',
        'sprite:move',
        callback
    )
});
//创建精灵图
gulp.task('sprite:build', function () {
    var spriteData = gulp.src(config.spritesSource).pipe(spritesmith(
        config.spritesMithConfig
    ));
    spriteData.img.pipe(gulp.dest(config.spritesImgOutputPath)); // output path for the sprite
    spriteData.css.pipe(gulp.dest(config.spritesCssOutputPath)); // output path for the CSS
});
//压缩
gulp.task('sprite:minify', function() {
    return gulp.src(config.spritesImgOutputPath+'/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
        .pipe(imagemin({
            interlaced: true,
        }))
        .pipe(gulp.dest(config.spritesImgOutputPath))
});
//移动
gulp.task('sprite:move', function() {
    gulp.src(config.spritesImgOutputPath +'/*.+(png|jpg|jpeg|gif|svg)', {base: 'static'})
        .pipe(gulp.dest(config.buildDir));
});


//复制图片到build
gulp.task('imgMove', function () {
    gulp.src(config.imgMovePath +'/*.+(png|jpg|jpeg|gif|svg)', {base: 'static'})
        .pipe(gulp.dest(config.buildDir));
});



// 自动刷新浏览器
// 新建任务start，启用一个本地server，监视当前目录下的所有文件，一旦文件变化，浏览器reload
gulp.task('start', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./*', function() {
        browserSync.reload();
    });
});



// 打包主体build 文件夹并按照时间重命名
// 新建任务zip，将./dist文件夹下面的文件全部打包为publish.zip,发布到release文件夹下面
gulp.task('zip', function(){
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        }
        return i
    }
    var d=new Date();
    var year=d.getFullYear();
    var month=checkTime(d.getMonth() + 1);
    var day=checkTime(d.getDate());
    var hour=checkTime(d.getHours());
    var minute=checkTime(d.getMinutes());

    return gulp.src('./build/**')
        .pipe(zip(config.projectName+'-'+year+month+day +hour+minute+'.zip'))
        .pipe(gulp.dest('./release'));
});



// 定义develop任务在日常开发中使用
// gulp.task('develop',['sprite','sass','compress-css','compress-js','imgMove','watch','start' ]);
gulp.task('dev',['sprite:move'], function(callback) {
    runSequence(
        'sass',
        'compress-css',
        'AutoFx',
        'compress-js',
        'imgMove',
        'watch',
        'start',
        callback
    )
});


// 定义一个prod任务作为发布或者运行时使用
gulp.task('prod',['clean'], function(callback) {
    runSequence(
        'sprite',
        'sass',
        'compress-css',
        'AutoFx',
        'compress-js',
        'Imagemin',
        'zip',
        callback
    )
});



// gulp命令默认启动的就是default任务
// 可以设置潜质启动任务,如这里将clean任务作为依赖,也就是先执行一次clean任务,流程再继续.gulp.task('default',['clean'], function()
// gulp.task('default', ['develop']);
gulp.task('default', ['clean'], function(){
    gulp.start('dev');
});
```



### 3.1 手动安装插件

1. `npm install gulp --save-dev` 安装gulp
2. `npm install gulp-uglify gulp-minify-css gulp-rename gulp-concat gulp-plumber gulp-zip browser-sync  --save-dev` 把所有插件自己安装，这里只显示一部分





### 3.2 npm安装

```javascript
"devDependencies": {
    "browser-sync": "^2.13.0",
    "graceful-fs": "^4.1.4",
    "gulp": "^3.9.1",
    "gulp-autoprefixer": "^3.1.0",
    "gulp-cache": "^0.4.5",
    "gulp-clean": "^0.3.2",
    "gulp-clean-css": "^2.0.10",
    "gulp-concat": "^2.6.0",
    "gulp-css-spriter": "^0.3.3",
    "gulp-cssnano": "^2.1.2",
    "gulp-csso": "^2.0.0",
    "gulp-imagemin": "^3.0.1",
    "gulp-jshint": "^2.0.1",
    "gulp-minify-css": "^1.2.4",
    "gulp-notify": "^2.2.0",
    "gulp-plumber": "^1.1.0",
    "gulp-postcss": "^6.1.1",
    "gulp-rename": "^1.2.2",
    "gulp-sass": "^2.3.2",
    "gulp-tinypng": "^1.0.2",
    "gulp-uglify": "^1.5.3",
    "gulp-zip": "^3.2.0",
    "gulp.spritesmith": "^6.2.1",
    "imagemin-pngquant": "^5.0.0",
    "jshint": "^2.9.2",
    "run-sequence": "^1.2.1"
  },
  "dependencies": {
    "gulp": "^3.9.1",
    "gulp-imagemin": "^3.0.1",
    "gulp-sass": "^2.3.2",
    "gulp.spritesmith": "^6.2.1"
  }
```





## 执行任务

gulp 任务名

或者

gulp