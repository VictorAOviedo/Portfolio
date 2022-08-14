import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoSService } from 'src/app/service/proyecto-s.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombrePro: string = '';
  descripcionPro: string = '';
  urlPro: string = '';
  imgPro: string = '';

  constructor(private proyectoS: ProyectoSService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const edu = new Proyecto(this.nombrePro, this.descripcionPro, this.urlPro, this.imgPro);
    this.proyectoS.save(edu).subscribe(data => {
      alert("Proyecto añadido");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    })
  }

}
