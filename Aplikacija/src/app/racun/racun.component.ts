import { Component, OnInit } from '@angular/core';
import { Racun } from '../racun';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Banka } from '../banka';

@Component({
  selector: 'app-racun',
  templateUrl: './racun.component.html',
  styleUrls: ['./racun.component.css']
})
export class RacunComponent implements OnInit {

  racun:Racun;
  banke:Banka[];

  constructor(public service:ServiceService, public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.dobaviSveBanke().subscribe(data => this.banke = data);
    this.service.dobaviPoIdRacuna(this.activatedRoute.snapshot.params["id"]).subscribe(data => this.racun = data);
    
  }

  uzmiBanku(id):Banka{
    for(let i=0; i<this.banke.length;i++){
      if(this.banke[i].id == id){
        return this.banke[i];
      }
    }
  }

}
