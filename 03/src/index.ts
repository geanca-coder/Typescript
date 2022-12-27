// class User
// {
//     //they are automatically public by default
    
//     public email : string
//     public name : string
//     private readonly city : string = ''
    
//     constructor(email : string, name : string ){
//         this.email = email;
//         this.name = name;
//     }
// }

class User
{
    readonly city : string = 'SJO'
    constructor(public email : string, public name : string,
         private userId : string, protected _courseCount : number = 1){}

    get getAppleEmail() : string{
        
        return `email: ${this.email}`
    }

    get courseCount() : number{
        return this._courseCount
    }
    set courseCount(courseCount : number){
        if (courseCount <= 1){
            throw new Error('Course count shold be more than 1');
        }
        this._courseCount = courseCount
    }

    private deleteToken(){
        console.log('Token deleted')
    }
}

class SubUser extends User{

    //private mother class values cannot be accesed, the alternative is to make it protected so child classes can 
    //access it
    public isFamily : boolean = true
    changeCourseCount(){
        this._courseCount = 4 
    }
}


const geancarl = new User('geancarlo.com', 'geancarlo', 'snbsjkdl');