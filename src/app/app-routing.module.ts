import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';




const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },    
    { path: 'navbar', component: NavbarComponent },
    { path: 'heroes', component: HeroesComponent},
    { path: 'about', component: AboutComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
