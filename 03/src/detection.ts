function detectTypes(val : number | string | string[]){
    if(typeof val === 'string'){
        return val.toLowerCase()
    }
    if(typeof val === 'number'){
        return val + 2
    }
    return val[0]
}

function provideId(id : string | null){
    if(!id){
        console.log('provide uid')
        return
    }
    id.toLowerCase()
}

interface User {
    name : string,
    email : string 
}

interface Admin{
    name : string,
    email : string,
    isAdmin: true
}

function isAdmin(account : User | Admin) : boolean{
    return "isAdmin" in account
}


function logValue(x : Date | string){ // it is neccessary that it has the new keyboard
    if( x instanceof Date ){
        console.log(x.getDate())
    }else{
        console.log(x.toLowerCase())
    }
}


type Fish = {
    swin: () => void
};
type Bird ={
    fly :() => void
};


function isFish(pet : Fish | Bird): pet is Fish{
    return (pet as Fish).swin !== undefined
}


function getFood(pet : Fish | Bird){
    if (isFish(pet)){
        pet
        return 'fish food'
    }else{
        pet
        return 'bird food'
    }
}

//discriminated  unions

interface Circle{
    kind: 'circle'
    radius: number
}

interface Square{
    kind: 'square'
    side : number
}

interface Rectangle{
    kind: 'rectangle',
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle


function getTrueShape(shape: Shape){
    if(shape.kind === 'circle'){
        return Math.PI * shape.radius ** 2
    }
    //return shape.side * shape.side
}

function getArea(shape : Shape){
    switch(shape.kind){
        case 'circle':
            return  Math.PI * shape.radius ** 2
        case 'square':
            return shape.side * shape.side
        case "rectangle": 
            return shape.length * shape.width
        default:
            const _defaultForShape : never = shape
            return _defaultForShape
    }
}


//the never type



//exhaustiveness checking

