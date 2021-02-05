const jsonServer = require('json-server');
const app = jsonServer.create();
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

app.use(middlewares);

app.use((request, response, next) => {
  const authorizationHeader = request.headers.authorization;

  if (authorizationHeader) {
    next();
  } else {
    response.sendStatus(401);
  }
});

app.use(jsonServer.rewriter({
  '/api/*': '/$1'
}))

app.use(router);

if (process.env.HEROKU || process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log('JSON Server is running on port', port);
  });
}

module.exports = app;
