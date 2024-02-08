import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeapiRoutingModule } from './pokemon-routing.module';
import { ListComponent } from './pages/list/list.component';
import { MoreinfoComponent } from './pages/moreinfo/moreinfo.component';
import { PokeinfoComponent } from './pages/pokeinfo/pokeinfo.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { PokemonPipe } from './pipes/pokemon.pipe';


@NgModule({
  declarations: [
    ListComponent,
    MoreinfoComponent,
    PokeinfoComponent,
    NotfoundComponent,
    SearchboxComponent,
    PokemonPipe
  ],
  imports: [
    CommonModule,
    PokeapiRoutingModule,
  ],
  exports: [
    SearchboxComponent
  ]
})
export class PokeapiModule { }
