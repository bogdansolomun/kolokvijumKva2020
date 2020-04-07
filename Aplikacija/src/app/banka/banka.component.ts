import { Component, OnInit } from '@angular/core';
import { Banka } from '../banka';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-banka',
  templateUrl: './banka.component.html',
  styleUrls: ['./banka.component.css']
})
export class BankaComponent implements OnInit {

  banka:Banka;


  constructor(public service:ServiceService, public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.dobaviPoIdBanku(this.activatedRoute.snapshot.params["id"]).subscribe(data => this.banka = data);
  }

}
