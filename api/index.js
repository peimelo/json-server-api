const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(middlewares);

server.use((request, response, next) => {
  const authorizationHeader = request.headers.authorization;

  if (authorizationHeader) {
    next();
  } else {
    response.sendStatus(401);
  }
});

server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}))

server.use(router);

if (process.env.HEROKU || process.env.NODE_ENV !== 'production') {
  server.listen(port, () => {
    console.log('JSON Server is running on port', port);
  });
}
