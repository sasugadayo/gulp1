// 各モジュールの読み込み
const gulp = require('gulp');
// const sass = require('gulp-sass');
const sass = require('gulp-sass')(require('sass'));
sass.compiler = require("dart-sass"); // sassのコンパイルにdart-sassを使用する
const rename = require('gulp-rename');

// sassコンパイルの設定
function sassCompile(){
  return (
    gulp 
      // 読み込みファイルをセット
      .src('sass/main.scss')
      // コンパイルの実行
      .pipe(sass())
      // 書き出すファイル名を指定
      .pipe(rename('style.css'))
      // 指定した場所にcssを書き出し
      .pipe(gulp.dest('dist/styles'))
  )
}
// 「npx gulp」でsassコンパイルを実行
exports.default = sassCompile;
