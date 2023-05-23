import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-tipo-dark',
  templateUrl: './pokemon-tipo-dark.component.html',
  styleUrls: ['./pokemon-tipo-dark.component.css']
})
export class PokemonTipoDarkComponent {
  cantidad = 500;
  pokemones: any = [];
  pokemonesDark: any = [];
  conteo = 0;

  constructor(private http: HttpClient) {

    for (let i = 1; i <= this.cantidad; i++) {
      this.http.get("https://pokeapi.co/api/v2/pokemon/" + i).subscribe(data => {
        this.pokemones[i - 1] = data;
        if (this.pokemones[i - 1].types[0].type.name === 'dark') {
          this.pokemonesDark[this.conteo] = this.pokemones[i - 1];
          this.conteo++;
        }
      });
    }

  }
}
