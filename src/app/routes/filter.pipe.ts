import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(herosInfo : any, areaname: string): any[] {
        if (herosInfo) {
            return herosInfo.filter((listing: any) => listing.hero === areaname);
        }
    }

}
