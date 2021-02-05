# Json Server API

Example of how to use [Json Server](https://github.com/typicode/json-server) as API.

To install and start the API server, run the following commands in this directory:

```bash
npm install
node api
```

Open `http://localhost:3001`

## Using The API

### Include An Authorization Header

All requests should use an **Authorization header** to work with your own data:

```js
fetch(url, {
  headers: { Authorization: 'whatever-you-want' },
});
```

### API Endpoint

The following endpoints are available:

| Endpoints               | Usage                                 | Params                                          |
| ----------------------- | ------------------------------------- | ----------------------------------------------- |
| `GET /api/posts`        | Get all of the posts.                 |                                                 |
| `POST /api/posts`       | Add a new post.                       | **title** - [String] <br> **author** - [String] |
| `GET /api/posts/:id`    | Get the details of a single post.     |                                                 |
| `PUT /api/posts/:id`    | Edit the details of an existing post. | **title** - [String] <br> **author** - [String] |
| `DELETE /api/posts/:id` | Delete a post.                        |                                                 |
