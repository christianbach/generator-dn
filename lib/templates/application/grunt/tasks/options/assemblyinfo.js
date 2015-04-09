module.exports = {
    options: {
        // Can be solutions, projects or individual assembly info files 
        files: ['<%= settings.solutionDir %>'],
 
        // Filename to search for when a solution or project is specified above. Default is AssemblyInfo.cs. 
        filename: 'AssemblyInfo.cs', 
 
        info: {            
            description: 'Built on <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> from GIT commit <%= env.BUILD_VCS_NUMBER %>', 
            company: 'Dagens Nyheter', 
            product: 'Dagens Nyheter Prio', 
            copyright: 'Copyright © Dagens Nyheter <%= grunt.template.today("yyyy") %>', 
            version: '1.0.0.<%= env.BUILD_NUMBER %>',
            fileVersion: '1.0.0.<%= env.BUILD_NUMBER %>'
        }
    }
}