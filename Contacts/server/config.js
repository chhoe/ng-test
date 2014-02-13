path = require('path');

module.exports = {
  server: {
    listenPort: 4000,                                       // The port on which the server is to listen (means that the app is at http://localhost:4000 for instance)
    distFolder: path.resolve(__dirname, '../client/dist'),   // The folder that contains the application files
    staticUrl: '/static/'                                    // The base url from which we serve static files (such as js, css and images)
  }
};