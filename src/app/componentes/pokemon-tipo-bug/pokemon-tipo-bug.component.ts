import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-tipo-bug',
  templateUrl: './pokemon-tipo-bug.component.html',
  styleUrls: ['./pokemon-tipo-bug.component.css']
})
export class PokemonTipoBugComponent {

  cantidad = 500;
  pokemones: any = [];
  pokemonesBug: any = [];
  conteo = 0;

  constructor(private http: HttpClient) {

    for (let i = 1; i <= this.cantidad; i++) {
      this.http.get("https://pokeapi.co/api/v2/pokemon/" + i).subscribe(data => {
        this.pokemones[i - 1] = data;
        if (this.pokemones[i - 1].types[0].type.name === 'bug') {
          this.pokemonesBug[this.conteo] = this.pokemones[i - 1];
          this.conteo++;
        }
      });
    }

  }
}
