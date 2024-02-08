import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/PokemonList.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  pokemonList!:Pokemon[];
  filteredPokemonList!:Pokemon[];

  constructor(private service:PokemonService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(response => {
      this.pokemonList=response.results;
      this.filteredPokemonList = [...this.pokemonList];
    });
  }

  search(search:string) {
    if(search.length<3) this.filteredPokemonList = [...this.pokemonList];
    else {
      this.filteredPokemonList = [...this.pokemonList.filter(pokemon => pokemon.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))]
    }
  }
}
