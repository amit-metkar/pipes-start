import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filter: any, propName: string): any {
    if (value.length === 0 || filter === '' || filter === null || filter === undefined) {
      return value;
    }
    const filterResult = [];
    for (let obj of value) {
      if (obj[propName] === filter) {
        filterResult.push(obj);
      }
    }
    return filterResult;
  }

}
