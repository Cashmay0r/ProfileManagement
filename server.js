
const express = require("express");
const { join } = require("path");
const app = express();

//Serve assets from /public folder
app.use(express.static(join(__dirname,"public")));

//Serves the configuration file
app.get("/auth_config.json", (req, res)=>{
    res.sendFile(join(__dirname,"auth_config.json"));
});
//Serves the index page for all other requests
app.get("/*",(_,res) =>{
    res.sendFile(join(__dirname,"index.html"));
});

//Listening on port 3000
app.listen(3000, ()=>console.log("Application running on port 3000"))