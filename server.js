const express = require('express');
const app = express();

app.use(express.static(__dirname+"/client"));

//setup Env variable
var port = process.env.PORT || 3001;

app.listen(port, ()=>{
	console.log("Server running on port "+port);
});