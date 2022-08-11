import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsSService } from 'src/app/service/skills-s.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys-skills',
  templateUrl: './hys-skills.component.html',
  styleUrls: ['./hys-skills.component.css']
})
export class HysSkillsComponent implements OnInit {
  skills: Skills[] = [];

  constructor(private skillsS: SkillsSService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillsS.lista().subscribe(data => { this.skills = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.skillsS.delete(id).subscribe(data => {
        this.cargarSkills();
      }, err => {
        alert("No se pudo borrar Hard & Soft Skills");
      })
    }
  }
}
