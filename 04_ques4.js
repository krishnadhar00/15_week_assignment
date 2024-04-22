const data = {
    name:"krishna",
    age:22,
    city:'Phagwara',
    country:"India"
};
function checkProperty(obj,name)
{
    console.log(obj.hasOwnProperty(name));
}

checkProperty(data,"age");
checkProperty(data,"email");