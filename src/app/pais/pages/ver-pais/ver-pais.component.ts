import { Component } from '@angular/core';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent {

  termino: string = 'Hola mundo';

  buscar() {
    console.log(this.termino);
  }
}
