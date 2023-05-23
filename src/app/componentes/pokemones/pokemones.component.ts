import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent {

  cantidad = 500;

  pokemones: any = [];

  constructor(private http: HttpClient) {
    for (let i = 1; i <= this.cantidad; i++) {
      this.http.get("https://pokeapi.co/api/v2/pokemon/" + i).subscribe(data => this.pokemones[i - 1] = data)
    }

  }

}