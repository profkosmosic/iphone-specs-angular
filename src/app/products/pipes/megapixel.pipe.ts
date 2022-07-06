import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'megapixel'
})
export class MegapixelPipe implements PipeTransform {

  transform(n: number | string) {
    return n + "MP";
  }

}
