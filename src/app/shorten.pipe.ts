import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})

export class ShortenPipe implements PipeTransform {
  transform(value: any, length: number) {
    if (value.length > length) {
      return (<string>value).substring(0, length) + ' ...';
    } else {
      return value;
    }
  }
}
