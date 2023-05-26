const express = require ("express");//to build backed quickly we use express 
const app = express();
const cors = require ("cors");
const PORT = 8745;
require("./db")
app.use(cors())
app.listen(PORT,() => {
    console.log(`server is running on on port ${PORT}`);
})