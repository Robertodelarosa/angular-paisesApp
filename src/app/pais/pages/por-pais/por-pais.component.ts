import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais-service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  termino: string = 'Hola mundo';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar() {
    this.hayError = false;
    this.paisService.buscarPais(this.termino)
      .subscribe({
        next: (paises) => { console.log(paises); this.paises = paises },
        error: (e) => {
          this.hayError = true;
          this.paises = [];
        }
      })
  }
}
