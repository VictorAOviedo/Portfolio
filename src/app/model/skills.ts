export class Skills {
    id? : number;
    nombreSkills : string;
    imagenSkills : string;
    porcentajeSkills : number;
    colorPrimarioSkills: string;
    colorSecundarioSkills: string;

    constructor(nombreSkills: string, imagenSkills: string, porcentajeSkills: number, colorPrimarioSkills: string, colorSecundarioSkills: string){
        this.nombreSkills = nombreSkills;
        this.imagenSkills = imagenSkills;
        this.porcentajeSkills = porcentajeSkills;
        this.colorPrimarioSkills = colorPrimarioSkills;
        this.colorSecundarioSkills = colorSecundarioSkills;
    }
}