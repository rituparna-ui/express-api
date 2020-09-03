let users = [];
const { v4: uuidv4 } = require('uuid');
const getAll = (req,res)=>{
        res.json(users);
        res.end();
}

const createUser = (req,res)=>{
        const uId = uuidv4();
        const user = req.body;
        const newUserWithId ={...user,id:uId}
        users.push(newUserWithId);
        res.end();
}

const getById = (req,res)=>{
        const { id } = req.params;
        const foundUser = users.find((user)=> user.id === id);
        res.json(foundUser);
        res.end();
}

const deleteUser = (req,res)=>{
        const { id } = req.params;
        users = users.filter((user)=> user.id !== id);
        res.json(users)
}

const patchUser = (req,res)=>{
        const { id } = req.params;
        const userUpdate = users.find((user)=> user.id === id);
        const { first , last , age } = req.body;
        if(first)userUpdate.first = first;
        if(last)userUpdate.last = last;
        if(age)userUpdate.age = age;
        res.end();

}


exports.patchUser = patchUser;
exports.deleteUser = deleteUser;
exports.getById = getById;
exports.getAll = getAll;
exports.createUser = createUser;
