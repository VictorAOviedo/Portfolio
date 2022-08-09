export class Experiencia {
    id? : number;
    nombreExp : string;
    descripcionExp : string;
    fechaExp : string;

    constructor(nombreExp: string, descripcionExp: string, fechaExp: string){
        this.nombreExp = nombreExp;
        this.descripcionExp = descripcionExp;
        this.fechaExp = fechaExp;
    }
}
