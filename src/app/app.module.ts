import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { HerosComponent } from './routes/heros/heros.component';
import { HerosRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './routes/pagenotfound/pagenotfound.component';
import { FilterPipe } from './routes/filter.pipe';
import { HeroComponent } from './routes/hero/hero.component';
import { FilterurlPipe } from './routes/filterurl.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HerosComponent,
    PagenotfoundComponent,
    FilterPipe,
    HeroComponent,
    FilterurlPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HerosRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
