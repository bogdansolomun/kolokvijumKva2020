import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocetnaStranicaComponent } from './pocetna-stranica/pocetna-stranica.component';
import { BankeComponent } from './banke/banke.component';
import { BankaComponent } from './banka/banka.component';
import { RacuniComponent } from './racuni/racuni.component';
import { RacunComponent } from './racun/racun.component';
import { UplateComponent } from './uplate/uplate.component';
import { UplataComponent } from './uplata/uplata.component';


const routes: Routes = [
  {path:"",component:PocetnaStranicaComponent},
  {path: "banke",component:BankeComponent},
  {path:"banke/:id",component:BankaComponent},
  {path:"racuni",component:RacuniComponent},
  {path:"racuni/:id",component:RacunComponent},
  {path:"uplate",component:UplateComponent},
  {path:"uplate/:id",component:UplataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
