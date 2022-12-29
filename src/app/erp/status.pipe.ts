import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../services/data.service';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  constructor(
      private _data: DataService,
  ) {}

  transform(value: any, ...args: any[]): any {
    if (value == 1)
      return "Nouveau"
    else if(value == 2)
      return "En cours"
    else if(value == 3)
      return "En pause"
    else if(value == 4)
      return "Annulé"
    else if(value == 5)
      return "Terminé"
  }
}
