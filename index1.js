import express from "express";
const app = express();

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


//Middleware for Age Check
// function ageCheck(req, resp, next) {
//   if (!req.query.age || req.query.age < 18) {
//     resp.send("Alert ! You can not access this page");
//   } else 
//     {
//       next();
//     }
// }
// app.use(ageCheck); Applies globally

//Middleware for IP Check
// function ipCheck(req, resp, next) {
//   const ip = req.socket.remoteAddress;
//   console.log(ip); // View in terminal
//   next(); 
//   // if (ip.includes("192.168.0.107")) {
//   //   resp.send("Alert ! You can not access this page");
//   // } else 
//   //   {
//   //     next();
//   //   }
// }

// app.use(ipCheck); // Applies globally
