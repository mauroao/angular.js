module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      tarefa1: {
        src: ['js/**/*.js']
      }
    },
    concat: {
      js_firestore: {
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
        dest: 'docs/firestore/scripts.js'
      },
      js_rest: {
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
        dest: 'docs/rest/scripts.js'
      },      
      css_firestore: {
        src: [
              'node_modules/bootstrap/dist/css/bootstrap.min.css',
              'css/app.css',
              'css/ui.css',
        ],
        dest: 'docs/firestore/styles.css'
      },      
      css_rest: {
        src: [
              'node_modules/bootstrap/dist/css/bootstrap.min.css',
              'css/app.css',
              'css/ui.css',
        ],
        dest: 'docs/rest/styles.css'
      }
    },
    copy: {
      html_firestore: {
        src: ['view/*.html'], 
        dest: 'docs/firestore/', 
        filter: 'isFile'
      },
      index_firestore: {
        src: 'index.prod.html', 
        dest: 'docs/firestore/index.html', 
        filter: 'isFile'
      },      
      html_rest: {
        src: ['view/*.html'], 
        dest: 'docs/rest/', 
        filter: 'isFile'
      },
      index_rest: {
        src: 'index.prod.html', 
        dest: 'docs/rest/index.html', 
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
