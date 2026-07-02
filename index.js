import express from "express";

const app = express();
const PORT = 3200;

const blockedIps = ["::ffff:127.0.0.1", "192.168.1.100"];

function ipCheck(req, res, next) {
  const clientIp = req.ip || req.socket.remoteAddress || "unknown";
  console.log(`Incoming request from: ${clientIp}`);
  if (blockedIps.includes(clientIp)) {
    return res.status(403).send("Access denied for this IP");
  }else 
    {
      next();
    }
}

app.use(ipCheck);

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Page</h1>");
});

app.get("/admin", (req, res) => {
  res.send("<h1>Admin Page</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
