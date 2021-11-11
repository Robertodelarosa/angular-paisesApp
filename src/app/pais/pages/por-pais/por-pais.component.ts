import { Component } from '@angular/core';
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
  constructor(private paisService: PaisService) { }

  buscar() {
    this.hayError = false;
    this.paisService.buscarPais(this.termino)
      .subscribe({
        next: (v) => console.log,
        error: (e) => this.hayError = true
      })
  }
}
