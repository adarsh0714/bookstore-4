var users = [
    {email: 'abc@abc.com', password: 'abc'},
    {email: 'gef@abc.com', password: 'gef'},
    {email: 'xyz@abc.com', password: 'xyz'}
]

export var getUsersByEmail = (email) =>{
    var list = users.filter((item)=>(item.email==email));
    if(list.length > 0){
        return list;
    }else{
        console.log("In users returning nothing")
        return {}
   }
}

export var addUsers = (user)=>{
    users.push(user);
}