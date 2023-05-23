import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonesComponent } from './componentes/pokemones/pokemones.component';
import { PokemonTipoBugComponent } from './componentes/pokemon-tipo-bug/pokemon-tipo-bug.component';
import { PokemonTipoDarkComponent } from './componentes/pokemon-tipo-dark/pokemon-tipo-dark.component';
import { PokemonTipoDragonComponent } from './componentes/pokemon-tipo-dragon/pokemon-tipo-dragon.component';
import { PokemonTipoElectricComponent } from './componentes/pokemon-tipo-electric/pokemon-tipo-electric.component';
import { PokemonTipoFairyComponent } from './componentes/pokemon-tipo-fairy/pokemon-tipo-fairy.component';

const routes: Routes = [
  {path: "lpokemones", component: PokemonesComponent},
  {path: "lpokemonesBug", component: PokemonTipoBugComponent},
  {path: "lpokemonesDark", component: PokemonTipoDarkComponent},
  {path: "lpokemonesDragon", component: PokemonTipoDragonComponent},
  {path: "lpokemonesElectric", component: PokemonTipoElectricComponent},
  {path: "lpokemonesFairy", component: PokemonTipoFairyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
