const express = require("express");
const cors = require("cors");
const geschenkenRoute = require("./routes/geschenken");
const kinderenRoute = require("./routes/kinderen")

const app = express();

app.use(express.json());
app.use(cors());

app.use("/geschenken", geschenkenRoute);
app.use("/kinderen", kinderenRoute);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
