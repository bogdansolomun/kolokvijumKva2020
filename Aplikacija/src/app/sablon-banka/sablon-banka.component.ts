import { Component, OnInit, Input } from '@angular/core';
import { Banka } from '../banka';

@Component({
  selector: 'app-sb',
  templateUrl: './sablon-banka.component.html',
  styleUrls: ['./sablon-banka.component.css']
})
export class SablonBankaComponent implements OnInit {

  @Input()
  b:Banka;

  constructor() { }

  ngOnInit(): void {
  }

}
