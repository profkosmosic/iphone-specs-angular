import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gigabyte'
})
export class GigabytePipe implements PipeTransform {

  transform(n: number | string) {
    return n + "GB";
  }

}
