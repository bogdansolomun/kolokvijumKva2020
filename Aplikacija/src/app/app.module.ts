import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { PocetnaStranicaComponent } from './pocetna-stranica/pocetna-stranica.component';
import { RacuniComponent } from './racuni/racuni.component';
import { RacunComponent } from './racun/racun.component';
import { BankeComponent } from './banke/banke.component';
import { BankaComponent } from './banka/banka.component';
import { UplateComponent } from './uplate/uplate.component';
import { UplataComponent } from './uplata/uplata.component';
import { SablonBankaComponent } from './sablon-banka/sablon-banka.component';
import { SablonRacunComponent } from './sablon-racun/sablon-racun.component';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaStranicaComponent,
    RacuniComponent,
    RacunComponent,
    BankeComponent,
    BankaComponent,
    UplateComponent,
    UplataComponent,
    SablonBankaComponent,
    SablonRacunComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
