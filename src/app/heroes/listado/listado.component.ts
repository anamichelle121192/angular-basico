import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.css']
})

export class ListadoComponent {
  heroes : string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America' ]
  heroeBorrado : string ='';

  borrarHeroe(){
    // this.heroes.splice(2,1);
    this.heroeBorrado = this.heroes?.shift()||'';
    console.log(this.heroes);
  }

}


// export class ListadoComponent implements OnInit{

//   constructor(){
//       console.log('Constructor')
//   }
// //se utiliza para inicializar cosas
//   ngOnInit(): void {
//     console.log('ngOnInit');
//     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//     //Add 'implements OnInit' to the class.
    
//   }

// }
