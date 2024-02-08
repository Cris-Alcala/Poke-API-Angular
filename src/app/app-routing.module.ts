import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pokemonGuard } from './pokemon/services/guards/pokemon.guard';

const routes: Routes = [
  {path:'pokemon', loadChildren:()=>import('./pokemon/pokemon.module').then(m=>m.PokeapiModule), canActivate:[pokemonGuard]},
  {path:'**', redirectTo:'pokemon'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
