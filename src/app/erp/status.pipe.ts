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
    let status$:any
    this._data.getStatus().subscribe({
      next: (res: any) => {
        status$ = res.data
      },
      error: (error: any) => console.log(error),
    })

    return status$

    // let a: any = "boo"
    // this._data.getStatus().forEach(res => {
    //   res.data.forEach((status:any) => {

    //     if (status.niveau == value) {
    //       console.log(status.niveau + value);
    //       a= status.name;
    //       return a
    //     }
    //   });
    // })

    // return a
  }

}
