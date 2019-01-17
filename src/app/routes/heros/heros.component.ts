import { Component, OnInit } from '@angular/core';
import { HerosService } from '../heros.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {



  user: {id:any}

  herosInfo:{}[] = [];
  passData;

  constructor(private herosservice: HerosService, private acroute: ActivatedRoute, private router: Router) { }

  infos: any[];
  datas: any[];


  ngOnInit() {

    this.herosInfo = this.herosservice.heros;

    this.user =
    {
      id: this.acroute.snapshot.params['id']

    }

    window.scroll(0,0);

  }

  gobackhome(){

    this.router.navigate(['/']);
  }

  addfragment(){
    this.router.navigate([], {relativeTo: this.acroute , fragment: 'hero-detail'})

    /*this.acroute.params
      .subscribe(
        (params: Params) =>{
          this.user.id = params['id']
        }
      )*/
  }


}
