//Reguler syntax - const studentInfo = (student) => 
// Destructing parameters
    const studentInfo = ({id, fullName}) => {
    console.log(`${id}, ${fullName}`);
}

const student = {
    id : 101, 
    fullName : 'Md. Tanjim Mahtab'
}

studentInfo(student)