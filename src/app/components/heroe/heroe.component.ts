import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';




@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe:any = {};
  

  constructor(private activatedRoute:ActivatedRoute, private _heroeService: HeroesService, private _router:Router) {
    this.activatedRoute.params.subscribe(params =>{
      //console.log(params['id']);
      this.heroe = this._heroeService.getHeroe(params['id']);      
    })
   }

  ngOnInit(): void {
    //console.log(this.heroe);
  }

  getBack(){
    this._router.navigate(['/heroes']);
  }

}
