import { Component, OnInit } from '@angular/core';
import { Uplata } from '../uplata';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Racun } from '../racun';

@Component({
  selector: 'app-uplate',
  templateUrl: './uplate.component.html',
  styleUrls: ['./uplate.component.css']
})
export class UplateComponent implements OnInit {

  uplate:Uplata[];
  racuni:Racun[];
  dodatUplatilac:number;
  dodatPrimalac:number;
  iznos:number;

  constructor(public s:ServiceService, public router:Router) { }

  ngOnInit(): void {
    this.uplate =[];
    this.racuni = [];
    this.dobaviSveUplate();
  }

  dobaviSveUplate(){
    this.s.dobaviSveUplate().subscribe(data => this.uplate = data);
    this.s.dobaviSveRacune().subscribe(data => this.racuni = data);
    
  }


  dodajUplatu(){
    let obj = {id:0,uplatilac:this.dodatUplatilac,primalac:this.dodatPrimalac,iznos:this.iznos} as Uplata;
    this.s.dodajUplatu(obj).subscribe(()=>this.dobaviSveUplate());
  }

  obrisiUplatu(id){
    this.s.obrisiUplatu(id).subscribe(()=>this.dobaviSveUplate());
  }

  uzmiRacun(id):Racun{
    for(let i=0; i<this.racuni.length;i++){
      if(this.racuni[i].id == id){
        return this.racuni[i];
      }
    }
  }

}
