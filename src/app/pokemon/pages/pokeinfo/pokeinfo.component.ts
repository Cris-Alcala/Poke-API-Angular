import { Component, OnInit } from '@angular/core';
import { PokemonDetailed } from '../../interfaces/PokemonDetailed.interface';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-pokeinfo',
  templateUrl: './pokeinfo.component.html',
  styleUrl: './pokeinfo.component.css'
})
export class PokeinfoComponent implements OnInit{
  pokemon!:PokemonDetailed;

  constructor(private service:PokemonService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.service.getOne(id))
    ).subscribe(data => { 
      if (data === undefined) return this.router.navigateByUrl('/pokemon') 
      return this.pokemon = data;
    })
  }
}
