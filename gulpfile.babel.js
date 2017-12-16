import gulp from 'gulp';
import sass from 'gulp-sass';

export function styles() {
	return gulp.src('sass/style.scss')
		.pipe(sass({
			outputStyle: "compressed"
		}))
		.pipe(gulp.dest('./'))
}
