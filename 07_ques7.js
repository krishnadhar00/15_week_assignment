const userMap = new Map()
function userAdd(name,age,email)
{
    const info = {age,email};
    userMap.set(name,info);
}
function updateUser(name,age,email)
{
    if(userMap.has(name))
    {
        const userinfo = userMap.get(name);
        userinfo.age =age;
        userinfo.email = email;
    }
}
function deleteUser(name)
{
    userMap.delete(name);
}
userAdd("Alice", 30, "alice@example.com");
userAdd("Bob", 25, "bob@example.com");
console.log(userMap);

updateUser("Alice", 31, "newemail@example.com");
console.log(userMap);

deleteUser("Bob");
console.log(userMap);
