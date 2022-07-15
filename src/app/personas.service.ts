import { Injectable } from "@angular/core";
import { Persona } from "./persona.model";
import { LoggingService } from "./loggingService.service";

@Injectable()
export class PersonasService{
    personas: Persona [] = [new Persona('Juan Sebastian','Bedoya Perez',1014253754,28,'jsbp199414@outlook.com')];
  

    constructor(private loggingService:LoggingService){}

    agregarPersonas(persona:Persona){
        this.personas.push(persona);
        this.loggingService.enviaMensajeConsola(persona.nombres + ' ' +persona.cedula)
      }

}