import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): any {
    if (value.length === 0) {
      return value;
    }
    const charSet = value.split('');
    return charSet.reverse().join('');
  }

}
