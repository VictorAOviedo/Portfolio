import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsSService } from 'src/app/service/skills-s.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {
  nombreSkills: string = '';
  imagenSkills: string = '';
  porcentajeSkills: number = 0;
  colorPrimarioSkills: string = '';
  colorSecundarioSkills: string = '';

  constructor(private skillsS: SkillsSService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skll = new Skills(this.nombreSkills, this.imagenSkills, this.porcentajeSkills, this.colorPrimarioSkills, this.colorSecundarioSkills);
    this.skillsS.save(skll).subscribe(data => {
      alert("Skill añadido");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    })
  }

}
