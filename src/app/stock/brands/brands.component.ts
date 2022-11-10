import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  brand$: any

  constructor(
    private _brand: BrandService,
  ) {}

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands(){
    this._brand.getBrands().subscribe({
      next: (res: any) => {
        console.log(res)
        this.brand$ = res.data
      },
      error: (error: any) => console.log(error),
    })
  }

}
