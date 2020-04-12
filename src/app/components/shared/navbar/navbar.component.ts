import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';
import { SearchComponent } from '../../search/search.component';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _heroeService:HeroesService, private ruta:Router) {      
   }

  ngOnInit(): void {
  }

  buscarHeroe(nombre:string){
    let heroe = this._heroeService.buscarHeroe(nombre);   
    this.ruta.navigate(['/search',nombre]);
    
    //console.log(heroe);
  }
}
