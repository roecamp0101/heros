import { Component, OnInit } from '@angular/core';
import { HerosService } from '../heros.service';
import { ActivatedRoute, Params } from '@angular/router';
//import { FilterPipe } from '../filter.pipe';
//import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  herosInfo:{}[] = [];


  constructor(private herosservice: HerosService, private route: ActivatedRoute) { }

  //infos: any[];
  //datas: any[];

  user: {id:any, name:any}



  ngOnInit() {

    //console.log(this.route.snapshot.queryParams)
    this.herosInfo = this.herosservice.heros;

    window.scroll(0,0);

    /*this.herosservice.getSuperHeroInfo().subscribe(
              (datas: any) => {
                const myArray = [];
                for (let key in datas) {
                  myArray.push(datas[key]);
                }
                this.infos = myArray;
              });*/

  }

}
