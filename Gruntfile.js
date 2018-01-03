module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      tarefa1: {
        src: ['js/**/*.js']
      }
    },
    concat: {
      firestore_version: {
        src: [
              'node_modules/angular/angular.min.js',
              'node_modules/angular-route/angular-route.min.js',
              'lib/angular/angular-locale_pt-br.js',
              'lib/serialGenerator/serialGenerator.js',
              'lib/ui/ui.js',
              'lib/ui/uiAccordion.js',
              'lib/ui/uiDate.js',
              'js/app.js',
              'js/controllers/listaTelefonicaCtrl.js',
              'js/controllers/novoContatoCtrl.js', 
              'js/controllers/detalhesContatoCtrl.js',   
              'js/services/firestore/fireStoreService.js',
              'js/services/firestore/contatosAPIService.js',
              'js/services/firestore/operadorasAPIService.js',
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
      http_version: {
        src: [
              'node_modules/angular/angular.min.js',
              'node_modules/angular-route/angular-route.min.js',
              'lib/angular/angular-locale_pt-br.js',
              'lib/serialGenerator/serialGenerator.js',
              'lib/ui/ui.js',
              'lib/ui/uiAccordion.js',
              'lib/ui/uiDate.js',
              'js/app.js',
              'js/controllers/listaTelefonicaCtrl.js',
              'js/controllers/novoContatoCtrl.js', 
              'js/controllers/detalhesContatoCtrl.js',
              'js/services/http/contatosAPIService.js',
              'js/services/http/operadorasAPIService.js',
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
      css_files: {
        src: [
              'node_modules/bootstrap/dist/css/bootstrap.min.css',
              'css/app.css',
              'css/ui.css',
        ],
        dest: 'docs/styles.css'
      }
    },
    copy: {
      tarefa1: {
        src: ['view/*.html'], 
        dest: 'docs/', 
        filter: 'isFile'
      },
      tarefa2: {
        src: 'index.prod.html', 
        dest: 'docs/index.html', 
        filter: 'isFile'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('firestore-version', [
    'jshint', 
    'concat:firestore_version', 
    'concat:css_files', 
    'copy']);

    grunt.registerTask('http-version', [
      'jshint', 
      'concat:http_version', 
      'concat:css_files', 
      'copy']);

};
