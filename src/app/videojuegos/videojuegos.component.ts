import { Component } from '@angular/core';

@Component({
    selector: 'videojuegos',
    templateUrl: './videojuegos.component.html'
})

// [style.background]="yellow" ---> No funciona así, por que necesita estar dentro del componente como una propiedad

export class VideojuegosComponent{
    public nombre:string;
    public mejor_juego:string;
    public mejor_juego_retro:string;
    public mostrar_retro:boolean;
    public color:string;
    public year:number;

    public videojuegos:Array<string>;

    constructor(){
        this.nombre = 'Videojuegos 2022';
        this.mejor_juego = 'Silent Hill';
        this.mejor_juego_retro = 'Kirby';
        this.mostrar_retro = true;
        this.color = 'yellow';
        this.year = 2022;
        this.videojuegos = [
            'Call of duty',
            'Assesins creed',
            'Dead Island',
            'State of decay',
            'Forza'
        ];
    }
} 