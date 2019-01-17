import { Component, OnInit, ViewChild } from '@angular/core';
import { HerosService } from '../heros.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {


  herosInfo;
  userInfo: any[] = [];
  heronames: any ='';

  info = {
       hname: '',
       rname: '',
       gender: '',
       affli: ''
   }

   genders: string[] = ['Male', 'Female'];


  constructor(private herosservice: HerosService) { }

  ngOnInit() {
    this.herosInfo = this.herosservice.heros;
    window.scroll(0,0);
  }

  addHeros(){

       this.userInfo.push(this.heronames);
    }

    onItemDeleted(index){
      this.userInfo.splice(index, 1);
    }

 @ViewChild('f') formaccess: NgForm;

  onSubmit(form: NgForm){
    console.log(form)
      this.info.hname = this.formaccess.value.heroname;
      this.info.rname = this.formaccess.value.realname;
      this.info.affli = this.formaccess.value.alignment;
      this.info.gender = this.formaccess.value.gender;

      form.reset();
  }



}
