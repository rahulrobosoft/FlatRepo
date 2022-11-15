import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degreeConversion'
})
export class DegreeConversionPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    return ((value -  273.15)).toFixed(0);
  }

}
