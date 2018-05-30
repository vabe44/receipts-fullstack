import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(receipts: any, searchText: any): any {
    if(searchText == null) return receipts;

    return receipts.filter(category => {
      return category.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}
