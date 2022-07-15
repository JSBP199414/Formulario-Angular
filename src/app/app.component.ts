import { Component, OnInit } from '@angular/core';
import { LoggingService } from './loggingService.service';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';
import { PersonasComponent } from './personas/personas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Registro de usuarios';
  nameInput ='';
  surnameInput ='';
  cedulaInput = 0;
  ageInput = 0;
  mailInput = '';
  personas: Persona [] = [];
  
  constructor(private loggingService:LoggingService,private personasServices:PersonasService){
  }
  ngOnInit(): void {
    this.personas =this.personasServices.personas;
  }

  agregarPersonas(){
    let personaUno = new Persona(this.nameInput,this.surnameInput,this.cedulaInput,this.ageInput,this.mailInput)
    this.loggingService.enviaMensajeConsola(personaUno.nombres + ' ' + personaUno.apellidos)
    this.personasServices.agregarPersonas(personaUno);
  }
}
