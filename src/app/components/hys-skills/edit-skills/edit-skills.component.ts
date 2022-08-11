import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsSService } from 'src/app/service/skills-s.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {
  skll : Skills = null;

  constructor(private skillsS: SkillsSService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsS.detail(id).subscribe(data =>{
      this.skll = data;
    }, err =>{
      alert('Error al modificar Hard & Soft Skills');
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsS.update(id, this.skll).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert('Error al modificar Hard & Soft Skills');
      this.router.navigate(['']);
    })
  }

}
