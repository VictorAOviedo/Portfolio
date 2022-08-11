export class Skills {
    id? : number;
    nombreSkills : string;
    imagenSkills : string;
    porcentajeSkills : number;

    constructor(nombreSkills: string, imagenSkills: string, porcentajeSkills: number){
        this.nombreSkills = nombreSkills;
        this.imagenSkills = imagenSkills;
        this.porcentajeSkills = porcentajeSkills;
    }
}