import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProprietariosComponent } from './proprietarios/proprietarios.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateProprietarioComponent } from './proprietarios/create-proprietario/create-proprietario.component';
import { FormsModule } from '@angular/forms';
import { UpdateProprietarioComponent } from './proprietarios/update-proprietario/update-proprietario.component';
import { DeleteProprietarioComponent } from './proprietarios/delete-proprietario/delete-proprietario.component';
import { ImoveisComponent } from './imoveis/imoveis.component';
import { CreateImovelComponent } from './imoveis/create-imovel/create-imovel.component';
import { DeleteImovelComponent } from './imoveis/delete-imovel/delete-imovel.component';
import { UpdateImovelComponent } from './imoveis/update-imovel/update-imovel.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProprietariosComponent,
    CreateProprietarioComponent,
    UpdateProprietarioComponent,
    DeleteProprietarioComponent,
    ImoveisComponent,
    CreateImovelComponent,
    DeleteImovelComponent,
    UpdateImovelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
