# iPeer v4 Client Testing

This is the test frontend client for iPeer v4 to be used with the backend prototype (see https://github.com/cisdev2/ipeer4-server).

For the current version of iPeer (v3.1.x), see https://github.com/ubc/ipeer

This rewrite is primarily in AngularJS using Selenium/Protractor for automated testing and Bootstrap for styles.


## Running locally

Make sure Node.js (http://nodejs.org/download/) and Bower (http://bower.io/#install-bower) are installed.

Bower dependencies for this project are listed in bower.json.  Install dependencies at project root using
```
bower install
```

Run the client at http://localhost:8888 using
```
python SimpleServer.py
```

For complete local dependency, run the backend prototype. It is configured to run at http://localhost:8000 and to accept requests from this frontend client. The API is located at http://localhost:8000/api/doc/. This requires a MySQL database.


## Build & Development

Choose any web developer tool(s)/IDE. I use Adobe Brackets.

Postman is a REST client Chrome extension (http://goo.gl/t1bLJP) that will make requests to the local server/help debug. Once installed, the extension can be bookmarked for quick access.

The iPeer server API can be viewed and sandboxed at http://localhost:8000/api/doc/

We encourage test-driven development for this project.

(More to come on Build.)


## Testing

### Protractor E2E

This tests the client and its dependencies on the backend server.

Make sure this client (above) and the backend protoype are running. Then run the webdriver manager on a third port (already configured for http://localhost:4444) using
```
webdriver-manager start
```

Go to ipeer4/test/config then run
```
protractor protractor.js
```

### angular-mocks testing

This will test the client quickly, without backend server dependencies.

TBD (Not currently in place.)

### Karma unit testing

This will aid in unit testing everytime there is a change.

TBD (Not currently in place.)


## Documentation / Other

In anticipation of this repo moving to a different location, the docs folder contains user requirements and recommendations for the iPeer v4 UI/UX.
