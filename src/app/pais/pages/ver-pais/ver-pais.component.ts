import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais-service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {


    /*CON OPERADOR SWITCHMAP*/
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorId(id))
      )
      .subscribe(resp => console.log)

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
