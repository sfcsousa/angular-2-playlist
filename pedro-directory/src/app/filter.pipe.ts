import { Pipe, PipeTransform } from '@angular/core';

interface Ninja {
    name : string;
    belt : string;
}
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ninjas: Array<Ninja>, term: any): any {
   //check if search term is undefined
   if(term ===  undefined) return ninjas;
   //return updated ninjas array
   return ninjas.filter(function(ninja){
    return ninja.name.toLowerCase().includes(term.toLowerCase());
   });
  }

}
