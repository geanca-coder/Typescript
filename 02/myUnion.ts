//Union so score is going to be either a number or a string
let score: number | string = 33


type User = {
    name : string;
    id : number;
}

type Admin = {
    username : string;
    id : number;
}

let geancarlo: User | Admin = {name : 'Geancarlo', id: 121}

geancarlo = {username : 'Geancarlo', id: 121}


function getDbId(id : number | string){
    console.log(`DB id is: ${id}`)
    if (typeof id === "string") {
        id.toLowerCase()
    }
    if (typeof id === "number") {
        id = 3
    }
}

//array


const data : (number | string )[] = [1,3,4,'3']

let pi: 3.14 = 3.14 //strictly that value

let seatAllotment: 'aisle' | 'middle' | 'window'

seatAllotment = 'middle'





getDbId(3)
getDbId('lol')


