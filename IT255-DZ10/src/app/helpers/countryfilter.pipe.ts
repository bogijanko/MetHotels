import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryfilter'
})
export class CountryFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return item.name.toLowerCase().includes(searchText);
    })
  }

}
