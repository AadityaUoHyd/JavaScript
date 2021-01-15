//Write a JavaScript program to merge property of two objects.
//say obj1 has name, pocketMoney & age, where as obj2 has gender, hobby, & nationality.

const person = {
    name: 'Aaditya',
    pocketMoney: '$20',
    age:20
}

const student = {
    gender: 'Male',
    hobby: 'Cricket',
    nationality: 'Indian'
}

const newObj = Object.assign(person, student); //merging two objects using Object.assign method.

//const newObj = {...person, ...student};      //It could've also be merged by using spread operator.

console.log(newObj);
