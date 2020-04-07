import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Banka } from './banka';
import { Racun } from './racun';
import { Uplata } from './uplata';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  adresaBanka:string = "http://localhost:3000/banka"
  adresaRacuna:string = "http://localhost:3000/racun"
  adresaUplata:string = "http://localhost:3000/uplata"
  

  constructor(public http:HttpClient) { }

//Za banku
  dobaviSveBanke():Observable<Banka[]>{
    return this.http.get<Banka[]>(this.adresaBanka);
  }
  dobaviPoIdBanku(id):Observable<Banka>{
    return this.http.get<Banka>(this.adresaBanka + "/" + id);
  }

  dodajBanku(obj):Observable<Banka>{
    return this.http.post<Banka>(this.adresaBanka + "/", obj) ;
  }

  obrisiBanku(id):Observable<Banka>{
    return this.http.delete<Banka>(this.adresaBanka + "/" + id);
  }




  //Za racun
  dobaviSveRacune():Observable<Racun[]>{
    return this.http.get<Racun[]>(this.adresaRacuna);
  }
  dobaviPoIdRacuna(id):Observable<Racun>{
    return this.http.get<Racun>(this.adresaRacuna + "/" + id);
  }

  dodajRacun(obj):Observable<Racun>{
    return this.http.post<Racun>(this.adresaRacuna , obj) ;
  }

  obrisiRacun(id):Observable<Racun>{
    return this.http.delete<Racun>(this.adresaRacuna + "/" + id);
  }
  


  //za uplate
  dobaviSveUplate():Observable<Uplata[]>{
    return this.http.get<Uplata[]>(this.adresaUplata);
  }
  dobaviPoIdUplate(id):Observable<Uplata>{
    return this.http.get<Uplata>(this.adresaUplata + "/" + id);
  }

  dodajUplatu(obj):Observable<Uplata>{
    return this.http.post<Uplata>(this.adresaUplata , obj) ;
  }

  obrisiUplatu(id):Observable<Uplata>{
    return this.http.delete<Uplata>(this.adresaUplata + "/" + id);
  }



  



}
