module.exports = function (grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // 2. Настройка для объединения файлов находится тут
        react: {
            single_file_output: {
                files: {
                    'static/prod/main_react.js': 'static/virmir/react/left.jsx'
                }
            }
        },

        sass: {
			options: {
				style: 'expanded'
			},
			all: {
				files: {
					'/var/python/virmir/templates/static/prod/main.css': ['/var/python/virmir/templates/static/virmir/style/sass/main.scss']
				}
			}
		}

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-sass');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', [ 'sass']);

};