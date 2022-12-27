const score : Array<number>  = []
const names : Array<string> = []


function identityOne(val : boolean | number) : boolean | number{
    return val
}

function identityTwo(val : any): any{
    return val;

}

function identityThree<Type>(val : Type) : Type{
    return val;
}

identityThree('LOl')

function identityFour<T>(value: T): T{ //best way to define it
    return value;
}

interface Bootle{
    brand: string,
    type: number
}
identityFour<Bootle>({brand : 'lol', type : 1})

//arrow functions



function getSearchProducts<T>(products: T[]): T {

    //do some database operations
    const index = 0
    return products[index]
}

const getMoreSearchProducts = <T>(products: T[]): T =>{
    return products[0]
}


function anotherFunction<T, U>( valueOne : T, valueTwo: U):object{
    return{
        valueOne,
        valueTwo
    }
}
// console.log(anotherFunction(3, {}));

interface Quiz{
    name: string,
    type : string
}

interface Course{
    name : string,
    author : string, 
    subject : string
}

class Sellable<T>{
    public cart : T[] = []

    addToCart(product : T){
        this.cart.push(product)
    }
}



