const express = require("express");
const router = express.Router();

const users = [
{
"first":"Ritu",
"last":"Warwatkar",
"age":16
},
{
"first":"Jane",
"last":"Doe",
"age":18
}
];

router.get("/",(req,res)=>{
	res.json(users);
	res.end();
});

router.post("/",(req,res)=>{
	const user = req.body;
	users.push(user);
	res.end();
});

module.exports = router;
