import { Component, OnInit } from '@angular/core';
import { Banka } from '../banka';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-banke',
  templateUrl: './banke.component.html',
  styleUrls: ['./banke.component.css']
})
export class BankeComponent implements OnInit {

  banke:Banka[];
  pib:number;
  poslovnoIme:string;

  constructor(public s:ServiceService,public router:Router) { }

  ngOnInit(): void {
    this.dobaviSve();
    this.pib = 0;
    this.poslovnoIme = "";
  }
  dobaviSve(){
    this.s.dobaviSveBanke().subscribe(data => this.banke = data);
  }

  pogledajBanku(id){
    this.router.navigate(["/banke/" + id]);
  }

  dodajBanku(){
    let obj = {id:0, poslovnoIme:this.poslovnoIme,pib:this.pib}as Banka;
    this.s.dodajBanku(obj).subscribe(()=>this.dobaviSve());
  }
  
  obrisi(id){
    this.s.obrisiBanku(id).subscribe(()=>this.dobaviSve());
  }

  
}
