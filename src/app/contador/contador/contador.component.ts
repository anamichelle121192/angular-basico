import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <!-- <h1>Hola Mundo!</h1> -->
        <h1>{{titulo}}</h1>
        <button (click)="numero= numero +1">+1</button> <!--lo que esta dentro de () es un evento-->
        <span>{{numero}}</span> <!-- son propiedades de la clase -->
        <button (click)="numero= numero -1">-1</button>
        
        <button (click)="sumar()">+1</button> <!--lo que esta dentro de () es un evento-->
        <span>{{numero2}}</span> <!-- son propiedades de la clase -->
        <button (click)="restar()">-1</button>
        
        <button (click)="acumular(+1)">+1</button> <!--lo que esta dentro de () es un evento-->
        <span>{{numero3}}</span> <!-- son propiedades de la clase -->
        <button (click)="acumular(-1)">-1</button>
        
        <hr>
        <h1>la base es : {{base}}</h1>
        <button (click)="acumular5(+base)">+{{base}}</button> <!--lo que esta dentro de () es un evento-->
        <span>{{numero4}}</span> <!-- son propiedades de la clase -->
        <button (click)="acumular5(-base)">-{{base}}</button>

    `
})

export class ContadorComponent {
    titulo = 'Contador App';
    numero: number = 10;
    numero2: number = 10;
    numero3: number = 10;
    numero4: number = 10;
    base: number = 5;
    sumar() {
        this.numero2 += 1;
    }
    restar() {
        this.numero2 -= 1;
    }

    acumular(valor: number) {
        this.numero3 += valor;
    }

    acumular5(valor: number) {
        this.numero4 += valor;
    }
}