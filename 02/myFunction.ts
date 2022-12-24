function  addTwo(num : number) : number{
    return num + 2
}


function signUpUser(name : string, email : string, isPaid: boolean) : void{
    
}

let login = (name : string, email : string, isPaid : boolean = false) => {

    if(isPaid === void 0){
        isPaid = false;

    }

}

login('ds','ds')

signUpUser('','', false)

let value = addTwo(32)

function getUpper(val: string){
    return val.toUpperCase()
}

console.log(getUpper('geancarlo'))



// function getValue(val : number) {
//     if (val > 5) {
//         return true
//     }
//     return '200 ok'
// }

const getHello = (s : string): string => {
    return ''
}

const heros = ['spiderman', 'ironman','thor']

heros.map((hero : string ) : string=> {
    return `hero is ${hero}`
})


function consoleError(errsmg : string): void{
    console.log(errsmg);
}

function handleError(errsmg : string): never{
    throw new Error(errsmg);
}

export {}
