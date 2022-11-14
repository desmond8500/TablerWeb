import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../services/data.service';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {
  constructor(
      private _data: DataService,
  ) {}

  transform(value: unknown, ...args: unknown[]): unknown {
    this._data.getStatus().forEach(res => {
      console.log(res.niveau);

    })
    return 'hello';
  }
}
