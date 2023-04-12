import { Component } from "@angular/core";

//Cuando se crea un componente debe ir en un modulo

//llamamos al decorador
@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html',
}) 


// Creamos nuestro componente 
export class HeroeComponent{
    nombre : string = 'Iroman';
    edad   : number =45
    // crearme mediante codigo una propiedad que va hacer procesada, pero la utilizo normal como una propiedad
    get nombreCapitalizado (){
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`
        // return this.nombre + ' - ' + this.edad
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman'
    }

    cambiarEdad():void{
        console.log('hey...')
        this.edad = 30
    }
}