import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProprietariosComponent } from './proprietarios/proprietarios.component';
import { CreateProprietarioComponent } from './proprietarios/create-proprietario/create-proprietario.component';
import { UpdateProprietarioComponent } from './proprietarios/update-proprietario/update-proprietario.component';


const routes: Routes = [
    {path: 'proprietarios', component: ProprietariosComponent},
    {path: 'proprietarios/cadastrar', component: CreateProprietarioComponent},
    {path: 'proprietarios/atualizar/:id', component: UpdateProprietarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
