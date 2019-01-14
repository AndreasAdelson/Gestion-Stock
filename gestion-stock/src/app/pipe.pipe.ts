import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'age'
})
export class PipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value < 1) {
      return 'moins d\'un an d\'age';
    } else {
      return value + ' ans d\'age';
    }
  }

}
