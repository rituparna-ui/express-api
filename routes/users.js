const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { getAll } = require("./../controllers/userControl");

let users = [];

router.get("/",getAll);

router.post("/",(req,res)=>{
	const uId = uuidv4();
	const user = req.body;
	const newUserWithId ={...user,id:uId}
	users.push(newUserWithId);
	res.end();
});

router.get("/:id",(req,res)=>{
	const { id } = req.params;
	const foundUser = users.find((user)=> user.id === id);
	res.json(foundUser);
	res.end();
});

router.delete("/:id",(req,res)=>{
	const { id } = req.params;
	users = users.filter((user)=> user.id !== id);
	res.json(users)
});

router.patch("/:id",(req,res)=>{
	const { id } = req.params;

	const userUpdate = users.find((user)=> user.id === id);
	const { first , last , age } = req.body;

	if(first)userUpdate.first = first;
	if(last)userUpdate.last = last;
	if(age)userUpdate.age = age;
	res.end();

});

module.exports = router;
