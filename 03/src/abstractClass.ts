abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter : string,
    ){}

    abstract createStory(): void 
    
    takePhoto() {
        console.log('Taking photograph');
    }
}

class Instagram extends TakePhoto{
    constructor (
        public cameraMode: string,
        public filter : string,
        public bestPhoto : string

    ){
        super(cameraMode, filter)
    }

    createStory(): void {
        console.log('creating story')
    }

}

const newPhoto = new Instagram('slow','23-1-2922','su madre');

newPhoto.takePhoto()
