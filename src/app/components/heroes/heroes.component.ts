import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  //styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  i:number;

  constructor( private _heroesService:HeroesService, private _router:Router) { 
    //console.log('Constructor');
  }

  ngOnInit(): void {
    //console.log('On init');
    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);
  }

  verHeroe(i:number){
    this._router.navigate(['/heroe/',i]);
    //console.log(i);
  }

}
