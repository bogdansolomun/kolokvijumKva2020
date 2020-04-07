import { Component, OnInit, Input } from '@angular/core';
import { Racun } from '../racun';

@Component({
  selector: 'app-sr',
  templateUrl: './sablon-racun.component.html',
  styleUrls: ['./sablon-racun.component.css']
})
export class SablonRacunComponent implements OnInit {

  @Input()
  r:Racun;

  constructor() { }

  ngOnInit(): void {
  }

}
