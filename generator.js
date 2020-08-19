const fs = require('fs')


function generatePackage(name, description, keywords=[], author, license='ISC', dependencies, devDependencies) {
    let package = {
        name,
        version: "1.0.0",
        description,
        "main": "server.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "start": "NODE_ENV=production node server.js",
          "dev": "NODE_ENV=development nodemon server.js",
        },
        keywords,
        author,
        license,
        "dependencies": {
          "express": "^4.17.1",
          ...dependencies
        },
        "devDependencies": {
          "nodemon": "^2.0.4",
          ...devDependencies
        }
          
    }

    fs.writeFileSync('package.json', JSON.stringify(package, null, 2), 'utf-8')
}