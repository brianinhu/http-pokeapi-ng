import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonesComponent } from './componentes/pokemones/pokemones.component';
import { PokemonTipoBugComponent } from './componentes/pokemon-tipo-bug/pokemon-tipo-bug.component';
import { PokemonTipoDarkComponent } from './componentes/pokemon-tipo-dark/pokemon-tipo-dark.component';
import { PokemonTipoDragonComponent } from './componentes/pokemon-tipo-dragon/pokemon-tipo-dragon.component';
import { PokemonTipoElectricComponent } from './componentes/pokemon-tipo-electric/pokemon-tipo-electric.component';
import { PokemonTipoFairyComponent } from './componentes/pokemon-tipo-fairy/pokemon-tipo-fairy.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonesComponent,
    PokemonTipoBugComponent,
    PokemonTipoDarkComponent,
    PokemonTipoDragonComponent,
    PokemonTipoElectricComponent,
    PokemonTipoFairyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
