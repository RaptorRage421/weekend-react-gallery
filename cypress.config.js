const { defineConfig } = require("cypress");
const { resetTestDatabase, executeSqlFile } = require('./cypress/__utils__/db-setup.js')
const fs = require('fs');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        await resetTestDatabase()
        await executeSqlFile('tests.sql')
      })
      on('after:run', async (results) => {
        // Results will be undefined in interactive mode
        if (results) {
          // Deletes the build folder that the test run
          // generates. Only works if we supply a callback
          // function:
          fs.rmdir('build', {recursive: true}, () => {})
          console.log(
            results.totalPassed,
            'out of',
            results.totalTests,
            'passed'
          )
        }
      })
    },
    baseUrl: 'http://localhost:5002',
    
  }
});
