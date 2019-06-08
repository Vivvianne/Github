import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateShow'
})
export class DateShowPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
