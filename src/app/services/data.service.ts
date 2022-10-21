import { Injectable } from '@angular/core';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  statuts: any = [
    { code: 1, name: "Nouveau" },
    { code: 2, name: "En cours" },
    { code: 3, name: "En pause" },
    { code: 4, name: "Annulé" },
    { code: 5, name: "Terminé" },
  ]

  constructor(
    private _env: EnvService,
  ) {}


}
