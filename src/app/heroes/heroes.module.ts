import { NgModule } from '@angular/core'
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';

// Decoradores
@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    // Que cosas quiero que sea visible o publicas fuera de este modulo
    exports:[
        ListadoComponent
    ],
    imports:[
        //ofrece directivas como el ngif ngfor
        CommonModule
    ]
})

export class HeroesModule{}