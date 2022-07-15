import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {

  /**@Input para pasar la informacion del componente Padre al componente hijo */
  @Input() persona:Persona;
  @Input() indice:number;
 
}



