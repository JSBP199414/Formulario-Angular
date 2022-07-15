import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { LoggingService } from './loggingService.service';
import { PersonasService } from './personas.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggingService,PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
