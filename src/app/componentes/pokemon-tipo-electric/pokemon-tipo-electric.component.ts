import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-tipo-electric',
  templateUrl: './pokemon-tipo-electric.component.html',
  styleUrls: ['./pokemon-tipo-electric.component.css']
})
export class PokemonTipoElectricComponent {
  cantidad = 500;
  pokemones: any = [];
  pokemonesElectric: any = [];
  conteo = 0;

  constructor(private http: HttpClient) {

    for (let i = 1; i <= this.cantidad; i++) {
      this.http.get("https://pokeapi.co/api/v2/pokemon/" + i).subscribe(data => {
        this.pokemones[i - 1] = data;
        if (this.pokemones[i - 1].types[0].type.name === 'electric') {
          this.pokemonesElectric[this.conteo] = this.pokemones[i - 1];
          this.conteo++;
        }
      });
    }

  }
}
