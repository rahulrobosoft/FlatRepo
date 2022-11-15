import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'farhanconversion'
})
export class FarhanconversionPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return ((value - 273.15) * 9/5 + 32).toFixed(0);
  }

}
