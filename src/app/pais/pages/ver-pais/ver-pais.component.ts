import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais-service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    /*CON OPERADOR SWITCHMAP*/
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorId(id)),
        tap(console.log)
      )
      .subscribe(pais => this.pais = pais[0])

    /*FORMA DE TRABAJAR SIN EL OPERADOR SWITCHMAP*/
    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     this.paisService.getPaisPorId(id)
    //       .subscribe(pais => {
    //         console.log(pais);
    //       })
    //   })
  }
}
