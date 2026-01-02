const studentInfo = {
    id : 101,
    fullName : 'Md. Tanjim Mahtab Taosif',
    age : 24,
    language : {
        native : 'Bangla',
        beginner : 'English'
    }
}
// Destructuring object

const {id, language} = studentInfo
console.log(id);
console.log(language.beginner);


// Regular mathod to access objects
// console.log(studentInfo.id);
// console.log(studentInfo.fullName);
// console.log(studentInfo.age);
