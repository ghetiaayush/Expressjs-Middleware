import express from "express";
const app = express();

//middleware function in express is a function that has access to the request object (req), the response object (resp), and 
// the next middleware function in the application’s request-response cycle. 
// The next middleware function is commonly denoted by a variable named next.
// function checkRoute(req, resp, next) {
//   console.log("user is acessing " + req.url + " Page");
//   next();
// }
// app.use(checkRoute);

//instead of creating a separate function, we can also create an anonymous function and pass it to the app.use() method.
app.use((req, resp, next) => {
  console.log("user is acessing " + req.url + " Page");
  next();
});

app.get("/", (req, resp) => {
  resp.send("Home Page");
});

app.get("/users", (req, resp) => {
  resp.send("users Page");
});

app.get("/products", (req, resp) => {
  resp.send("Products Page");
});

app.listen(3200);


// Types of Middleware

// Application-level Middleware
// Registered using: app.use() or app.get()
// Purpose: Used to apply middleware globally or to specific routes in the main app.
// Example Use: Logging, request parsing, etc.

// Router-level Middleware
// Registered using: router.use()
// Purpose: Works like application-level middleware, but applies to route instances (e.g., for grouping /admin or /user routes).
// Example Use: Authorization checks in a specific route group.

// Built-in Middleware
// Comes with Express.js.
// Common example: express.static() to serve static files (like CSS, images).
// Purpose: Provides ready-to-use functionality without extra installation.

// Error-handling Middleware
// Defined with four arguments: (err, req, res, next)
// Purpose: Catches and handles errors across the application.
// Example Use: Sending custom error messages, logging errors.

// Third-party Middleware
// Installed via npm, and used with require() or import.
// Purpose: Add advanced functionalities.
// Common examples:
// morgan (logging)
// cors (Cross-Origin Resource Sharing)
// body-parser (parsing form data)
