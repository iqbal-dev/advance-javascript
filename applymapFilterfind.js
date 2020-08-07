const students = [
    {id:21,name:'Iqbal'},
    {id:22,name:'Iqram'},
    {id:23,name:'Arman'},
    {id:24,name:'Rashed'},
]

/*******Manual return name*******/
let newArray = [];
for (let i = 0; i < students.length; i++){
    const element = students[i];
     newArray.push(element.name);
}
console.log(newArray)
/*******Manual return name*******/
const name = students.map(s => s.name);
console.log(name);
const studentsId = students.filter(s => s.id > 22);
console.log(studentsId)