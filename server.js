const express = require("express");
const app = express();
const registerRouter = require("./routers/register");

app.listen(3000, function () {
  console.log("Ready to connect on port 3000");
}); 

app.use("/register", registerRouter);

app.get('/info', function(req, res) {
  res.send(JSON.stringify({name: "GDU", addr: "Quang Trung, Gò Vấp"}));
});
