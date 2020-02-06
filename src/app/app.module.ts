import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProprietariosComponent } from './proprietarios/proprietarios.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateProprietarioComponent } from './proprietarios/create-proprietario/create-proprietario.component';
import { FormsModule } from '@angular/forms';
import { UpdateProprietarioComponent } from './proprietarios/update-proprietario/update-proprietario.component';

@NgModule({
  declarations: [
    AppComponent,
    ProprietariosComponent,
    CreateProprietarioComponent,
    UpdateProprietarioComponent
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
