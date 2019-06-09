import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateShow'
})
export class DateShowPipe implements PipeTransform {

  transform(date: Date , format: string = 'dd/MMM/yyyy'): string {
    date = new Date(date);
    date.setDate(date.getDate());
    return new DatePipe('en-US').transform(date, format);
    
  }
}


