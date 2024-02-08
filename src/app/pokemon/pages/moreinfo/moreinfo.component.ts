import { Component, OnInit } from '@angular/core';
import { Items } from '../../interfaces/Items.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.component.html',
  styleUrl: './moreinfo.component.css'
})
export class MoreinfoComponent implements OnInit{
  itemsList!:Items;
  objects:any[] = [];

  constructor(private service:PokemonService) { }

  ngOnInit(): void {
    this.service.getAllItems().subscribe(response => {
      this.itemsList = response;
      this.itemsList.results.map(result => {
        const item:any = {
          name:'',
          sprite:''
        }
        this.service.getOneItem(result.name).subscribe(result => {
          item.sprite = result.sprites.default
          item.name = result.names[7].name
          this.objects = [...this.objects, item];
          console.log(this.objects);
        })
  
      })
    })
  }
}
