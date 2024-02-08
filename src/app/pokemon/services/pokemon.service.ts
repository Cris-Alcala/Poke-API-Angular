import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon, PokemonList } from '../interfaces/PokemonList.interface';
import { Observable } from 'rxjs';
import { PokemonDetailed } from '../interfaces/PokemonDetailed.interface';
import { Items } from '../interfaces/Items.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  getAll():Observable<PokemonList> {
    return this.http.get<PokemonList>(`https://pokeapi.co/api/v2/pokemon?limit=1302`);
  }
  getAllItems():Observable<Items> {
    return this.http.get<Items>(`https://pokeapi.co/api/v2/item/`);
  }
  getOneItem(name:string):Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/item/${name}`)
  }
  getOne(name:string):Observable<PokemonDetailed> {
    return this.http.get<PokemonDetailed>(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }

}
