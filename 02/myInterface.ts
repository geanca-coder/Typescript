interface User
{
    readonly _id : number | string,
    email : string,
    userId : number,
    googleId? : string,
    // startTrail : () => string
    startTrail(): string
    getCoupon(name : string, value : number) : number
}
interface User
{
    githubToken? : string
}

interface Admin extends User{
    role : 'admin' | 'ta' | 'learner'
}


const hitesh : Admin = {
    _id : 12, 
    email : 'geancarlo', 
    userId : 2211, 
    startTrail : () =>{
        return 'lol'
    },
    getCoupon: (name : 'name', value : 1) =>{
        return 10
    },
    githubToken : 'cool',
    role: 'admin'
}


console.log(hitesh)


