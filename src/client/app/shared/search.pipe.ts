import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './pokemon.model'

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: Pokemon[], term: string): any {
    if(!term) return items;

    var filtered:any[] = items.filter(item => {
      return item.name.toLowerCase().indexOf(term.toLowerCase().trim()) > -1
    });

    return filtered;
  }
}
