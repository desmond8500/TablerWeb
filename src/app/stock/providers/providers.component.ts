import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {
  provider$: any

  constructor(
    private _provider: ProviderService,
  ) {}

  ngOnInit(): void {
    this.getProviders()
  }

  getProviders(){
    this._provider.getProviders().subscribe({
      next: (res: any) => {
        console.log(res)
        this.provider$ = res.data
      },
      error: (error: any) => console.log(error),
    })
  }

}
