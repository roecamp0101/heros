import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterurl'
})
export class FilterurlPipe implements PipeTransform {

  transform(value: any): any {

      let indexof =  value.indexOf('-');

      return  value.substring(indexof+1);

     }

}
