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
