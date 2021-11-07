const express = require("express");
const app = express();
const port = 8000;

const userRoutes = require("./routes/users");
app.use("/users", userRoutes);

/*
app.get("/", (req, resp) => {
  resp.json({
    "greet":"Hi!!!"
  })
})
*/

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});