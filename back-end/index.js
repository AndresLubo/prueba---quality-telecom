const express = require("express");
const app = express();
const cors = require("cors");
const config = require("./env-config/config.js");
const port = config.app.port;
const routerApi = require("./routes/router.js");

app.use(cors());
app.use(express.json())

routerApi(app)


app.listen(port, () => console.log(`app running on port ${port}`))