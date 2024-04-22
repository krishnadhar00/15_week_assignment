const student = {
    name:"KRishna",
    age:24,
    grade:"B"
};
function updateGrade(name)
{
    student.grade=name;
    console.log(student);
}
updateGrade("A+");