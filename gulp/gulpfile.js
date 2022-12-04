import gulp from 'gulp';
import { deleteAsync } from 'del'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
import tsify from 'tsify'

const { series, parallel, src, dest } = gulp

async function cleanDist() {
  return await deleteAsync(['dist'])
}

function copyHTML() {
  return src('public/**/*')
    .pipe(dest('dist'))
}

function createJS() {
  return browserify({
    basedir: '.',
    entries: [ 'src/app.ts']
  })
    .plugin(tsify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(dest('dist'))
}

export default series(
  cleanDist,
  parallel(createJS, copyHTML)
)