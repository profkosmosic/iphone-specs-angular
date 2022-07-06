import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inch2cm'
})
export class Inch2cmPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
