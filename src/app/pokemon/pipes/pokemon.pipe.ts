import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemon'
})
export class PokemonPipe implements PipeTransform {

  transform(value: string): string {
    switch(value.toLocaleLowerCase()) {
      case 'grass':
        return 'green';
      case 'fire':
        return 'red';
      case 'water':
        return 'rgb(85, 85, 255)';
      case 'bug': 
      case 'ground':
        return 'rgb(130, 76, 76)';
      case 'normal':
        return 'gray';
      case 'electric':
        return 'yellow';
      case 'ice':
        return 'rgb(172, 172, 255)';
      case 'psychic':
        return 'rgb(107, 42, 107)';
      default:
        return 'white'
    }
  }

}
