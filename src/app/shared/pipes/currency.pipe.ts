import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value ? `&#8369; ${value.toFixed(2)}` : '';
  }

}
