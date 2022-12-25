const User = {
    name : "hitesh",
    isPaid : true
}

function createUser({name : string, isPaid : boolean}){

}

let newUser = { name : 'don omar', isPaid : false, email : 'bombo'}

createUser(newUser)


function createCourse():{ name : string, isPaid : boolean}{
    return User;
}





type User2  = {
    name : string;
    email : string;
    isActive : boolean;
}
2
function createUser2(user : User2): User2{
    return {name : "", email : "", isActive : true};
}


createUser2({name : "", email : "", isActive : true})

//readonly

// I use readonly whenever i dont 
// an attribute to be modified.

type Dog = {
    readonly _id : string;
    name : string;
    age : number;
    isGood : boolean;
    race? : string; //optional ?
}

type pedigree = {
    hasPedigree : boolean
}

type pedigreeDate ={
    date : string 
}

type pedigreeDetails = pedigree & pedigreeDate & {cvv : number} ; //is used to combined classes



let mydog : Dog = {_id : '1232', name: 'Linux',  age : 12, isGood : false}

mydog.age = 13


//?

//

export {}