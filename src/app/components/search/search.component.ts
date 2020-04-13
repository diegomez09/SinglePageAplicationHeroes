import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  heroe:Heroe[] = []

  termino:string = null;
  constructor(private activatedRoute:ActivatedRoute, private _heroeService:HeroesService) { 
    
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.termino = (params['termino']);      
      this.heroe = this._heroeService.buscarHeroe(params['termino']);
      console.log(this.heroe);      
    })
  }  

}
