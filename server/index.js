const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
const server = require("http").createServer(app);

app.use(bodyParser.json());
app.use(cors());



const bitkubRoute = require("./routes/bitkub-route");

app.use("/crypto", bitkubRoute);
// app.use("/user", passport.authenticate("jwt", { session: false }), userRoute);
// app.use("/chat", passport.authenticate("jwt", { session: false }), chatRoute);

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => console.warn(`Server started on port ${PORT}`));
