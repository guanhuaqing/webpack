export class Singleton {
    static singletonInstance;
    propA = {};
    constructor() {
        this.propA = {
            a: ' I am a property.'
        };
    }

    static getInstance() {
        if (!Singleton.singletonInstance) {
            Singleton.singletonInstance = new Singleton();
        }
        return Singleton.singletonInstance;
    }
}
