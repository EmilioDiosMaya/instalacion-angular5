import { Component } from '@angular/core';

@Component({
    selector: 'consolas',
    templateUrl: './consolas.component.html'
})

// [style.background]="yellow" ---> No funciona así, por que necesita estar dentro del componente como una propiedad

export class ConsolasComponent{
    public nombre:string;
    public mejor_consola:string;
    public year:number;
    public consolas:Array<string>;
    public color:string;

    constructor(){
        this.nombre = 'Consolas 2022';
        this.mejor_consola = 'Steam Deck';
        this.year = 2022;
        this.color = 'red';
        this.consolas = [
            'Playstation',
            'Polystation',
            'Nintendo 64',
            'Xbox',
            'WII',
            'Steam Deck'
        ];
    }
} 