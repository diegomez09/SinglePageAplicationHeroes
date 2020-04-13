import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  //styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() indice:number;

  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor(private _ruta:Router) {       
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {            
  }

  verHeroe(){
    //console.log(this.indice);
    this._ruta.navigate(['/heroe',this.indice])
    //this.heroeSeleccionado.emit(this.indice);
    
  }
}
