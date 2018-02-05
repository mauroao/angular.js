module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      tarefa1: {
        src: ['js/**/*.js']
      },      tarefa1: {
        src: ['lib/**/*.js']
      }
    },
    concat: {
      js: {
        src: [
              'node_modules/angular/angular.min.js',
              'node_modules/angular-route/angular-route.min.js',
              'lib/angular/angular-locale_pt-br.js',
              'lib/serialGenerator/serialGenerator.js',
              'lib/ui/ui.js',
              'lib/ui/uiAccordion.js',
              'lib/ui/uiDate.js',
              'lib/ui/uiPaginator.js',
              'js/app.js',
              'js/controllers/listaTelefonicaCtrl.js',
              'js/controllers/novoContatoCtrl.js', 
              'js/controllers/detalhesContatoCtrl.js',
              'js/services/contatosAPIService.js',
              'js/services/operadorasAPIService.js',
              'js/filters/nameFilter.js',
              'js/filters/ellipsisFilter.js',
              'js/config/configValues.js',
              'js/config/routeConfig.js',
              'js/config/serialGeneratorConfig.js',
              'js/directives/uiAlertDirective.js',
              'js/interceptors/timestampInterceptor.js',
              'js/interceptors/errorInterceptor.js',
              'js/interceptors/loadingInterceptor.js',
              'js/config/interceptorsConfig.js'
        ],
        dest: 'docs/scripts.js'
      },       
      css: {
        src: [
              'node_modules/bootstrap/dist/css/bootstrap.min.css',
              'css/app.css',
              'css/ui.css',
        ],
        dest: 'docs/styles.css'
      }
    },
    copy: {      
      html: {
        src: ['view/*.html'], 
        dest: 'docs/', 
        filter: 'isFile'
      },
      index: {
        src: 'index.prod.html', 
        dest: 'docs/index.html', 
        filter: 'isFile'
      },
      components: {
        src: 'lib/ui/uiPaginator.html',
        dest: 'docs/lib/ui/uiPaginator.html',
        filter: 'isFile'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('prod', [
    'jshint', 
    'concat', 
    'copy']);

};
