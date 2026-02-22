let students=[{"name":"Ravi","marks":80},{"name":"Vijay","marks":75},{"name":"Ajay","marks":90}]
let names=students.map((s)=>s.name)
console.log(names)
let PassedStudents=students.filter((s)=>s.marks>=80)
console.log(PassedStudents)