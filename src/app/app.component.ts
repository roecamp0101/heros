import { Component, OnInit } from '@angular/core';
import { HerosService } from './routes/heros.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  time = new Date();
  herosInfos:{}[] = [];

  constructor(private herosservice: HerosService) { }

  ngOnInit(){
    this.herosInfos = this.herosservice.heros;
  }




}
