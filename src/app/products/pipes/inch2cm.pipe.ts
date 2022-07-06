import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inch2cm'
})
export class Inch2cmPipe implements PipeTransform {

  transform(n: number) {
    return (n * 2.54).toFixed(2) + "cm";
  }

}
