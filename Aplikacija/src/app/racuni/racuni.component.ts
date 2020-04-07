import { Component, OnInit } from '@angular/core';
import { Racun } from '../racun';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Banka } from '../banka';

@Component({
  selector: 'app-racuni',
  templateUrl: './racuni.component.html',
  styleUrls: ['./racuni.component.css']
})
export class RacuniComponent implements OnInit {

  racuni:Racun[];
  banke:Banka[];
  dodataBanka:number;
  brojRacuna:string;

  constructor(public s:ServiceService,public router:Router) { }

  ngOnInit(): void {
    this.racuni = [];
    this.banke = [];
    this.dobaviSveRacune();
  }

  dobaviSveRacune(){
    this.s.dobaviSveRacune().subscribe(data => this.racuni = data);
    this.s.dobaviSveBanke().subscribe(data =>this.banke = data);
   
  }

  pogledajRacun(id){
    this.router.navigate(["/racuni/" + id]);
  }

  dodajRacun(){
    let obj = {id:0,bankaId:this.dodataBanka,brojRacuna:this.brojRacuna,stanje:0} as Racun;
    this.s.dodajRacun(obj).subscribe(()=>this.dobaviSveRacune());
  }


  obrisiRacun(id){
    this.s.obrisiRacun(id).subscribe(()=>this.dobaviSveRacune());
  }

  uzmiBanku(id):Banka{
    for(let i=0; i<this.banke.length;i++){
      if(this.banke[i].id == id){
        return this.banke[i];
      }
    }
  }

}
