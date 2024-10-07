#!/usr/bin/env node

class AppController {
  static getHomePage(request, response) {
    const textResponse = 'Hello Holberton School!';
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.setHeader('Content-Length', textResponse.length);
    response.send(textResponse);
  }
}

export default AppController;
