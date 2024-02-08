import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { MoreinfoComponent } from './pages/moreinfo/moreinfo.component';
import { PokeinfoComponent } from './pages/pokeinfo/pokeinfo.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  {path:'', children:[
    {path:'list', component:ListComponent},
    {path:'moreinfo', component:MoreinfoComponent},
    {path:'notfound', component:NotfoundComponent},
    {path:'list/:id', component:PokeinfoComponent},
    {path:'**', redirectTo:'list'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokeapiRoutingModule { }
