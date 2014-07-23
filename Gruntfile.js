module.exports = function (grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // 2. Настройка для объединения файлов находится тут
        reactjsx: {
            all: {
                files: [
                    {
                        expand: true,
                        cwd: '/var/python/virmir/templates/virmir/react',
                        src: ['*.jsx', '**/*.jsx'],
                        dest: '/var/python/virmir/templates/virmir/js/react',
                        ext: '.js'
                    }
                ]
            }
        },

        sass: {
            options: {
                style: 'expanded'
            },
            all: {
                files: {
                    '/var/python/virmir/templates/static/prod/main.css': [
                        '/var/python/virmir/templates/virmir/style/sass/main.scss'
                    ]
                }
            }
        },

        concat: {
            dist: {
                // the files to concatenate
                src: [
                    '/var/python/virmir/templates/virmir/js/**/*.js'
                ],
                // the location of the resulting JS file
                dest: '/var/python/virmir/templates/static/prod/main.js'
            }
        }

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-reactjsx');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['sass', 'reactjsx', 'concat']);

};