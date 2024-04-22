const car = {
    make: "BMW",
    model: "AS6",
    year: 2014
};
function makeCar(car)
{
    for(let key in car)
    {
        console.log(key+" "+car[key]);
    }
}
makeCar(car);