import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emotka'
})
export class EmotkaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value + '😜';
  }

}
