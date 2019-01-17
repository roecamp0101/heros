import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent}  from './routes/home/home.component';
import { HerosComponent}  from './routes/heros/heros.component';
import { HeroComponent}  from './routes/hero/hero.component';
import { PagenotfoundComponent }  from './routes/pagenotfound/pagenotfound.component';


const routes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'hero', component: HeroComponent},
    {path: 'heros/:id', component: HerosComponent},
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: '**', component: PagenotfoundComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class HerosRoutingModule { }
