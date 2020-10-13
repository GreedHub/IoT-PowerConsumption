export class Medition{
    date:Date;
    medition:number;

    constructor(_medition:number){
        this.date = new Date();
        this.medition = _medition;
    }
}