const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 1604;
const usersRoute = require("./routes/users");


app.use(cors());
app.use(express.json());
app.use("/users",usersRoute)

app.get("/",(req,res)=>{
	res.send("hello")
});

app.listen(PORT,()=>{
	console.log(`Serving at ${PORT}`);
});
