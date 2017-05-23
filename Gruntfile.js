module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Настройка для объединения файлов находится тут
            dist: {
                src: [
                   //'js/libs/*.js', // Все JS в папке libs
                    'js/jquery.js',  // Конкретный файл
                    'js/modernizr.js',  // Конкретный файл
                ],
                dest: 'js/build/production.js',
            }
        },

        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/build/'
                }]
            }
        },
          sass: {
            dist:{
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
         watch: {
             scripts: {
                 files: ['js/*.js'],
                 tasks: ['concat', 'uglify'],
                 options: {
                     spawn: false,
                 },
             },
             css: {
                 files: ['css/*.scss'],
                 tasks: ['sass'],
                 options: {
                     spawn: false,
                 }
             }
         },
    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-imagemin'); //'imagemin'
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'watch']);

};