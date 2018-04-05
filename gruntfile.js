// - Gruntfile for headless-browser experiment

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });  

    // --- Other Grunty stuff goes here

    // --- Load ASCIIDocTtor plugin here
    grunt.loadNpmTasks('grunt-asciidoctor');
};