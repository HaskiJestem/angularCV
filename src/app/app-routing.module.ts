import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpisComponent } from './opis/opis.component';
import { DoswiadczenieComponent } from './doswiadczenie/doswiadczenie.component';
import { EdukacjaComponent } from './edukacja/edukacja.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ZainteresowaniaComponent } from './zainteresowania/zainteresowania.component';

const routes: Routes = [
  {path: 'doswiadczenie', component: DoswiadczenieComponent},
  {path: 'edukacja', component: EdukacjaComponent},
  {path: 'kontakt', component: KontaktComponent},
  {path: 'opis', component: OpisComponent},
  {path: 'zainteresowania', component: ZainteresowaniaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
