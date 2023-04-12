import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
         ContadorComponent
      ],
          // Que cosas quiero que sea visible o publicas fuera de este modulo
    exports:[
        ContadorComponent
    ],
      imports: [
       
      ],
})

export class ContadorModule{

}