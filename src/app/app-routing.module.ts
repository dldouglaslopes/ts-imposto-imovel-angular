import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProprietariosComponent } from './proprietarios/proprietarios.component';
import { CreateProprietarioComponent } from './proprietarios/create-proprietario/create-proprietario.component';
import { UpdateProprietarioComponent } from './proprietarios/update-proprietario/update-proprietario.component';
import { DeleteProprietarioComponent } from './proprietarios/delete-proprietario/delete-proprietario.component';
import { ImoveisComponent } from './imoveis/imoveis.component';
import { DeleteImovelComponent } from './imoveis/delete-imovel/delete-imovel.component';
import { UpdateImovelComponent } from './imoveis/update-imovel/update-imovel.component';
import { CreateImovelComponent } from './imoveis/create-imovel/create-imovel.component';


const routes: Routes = [
    {path: 'proprietarios', component: ProprietariosComponent},
    {path: 'proprietarios/cadastrar', component: CreateProprietarioComponent},
    {path: 'proprietarios/atualizar/:id', component: UpdateProprietarioComponent},
    {path: 'proprietarios/deletar/:id', component: DeleteProprietarioComponent},
    {path: 'imoveis', component: ImoveisComponent},
    {path: 'imoveis/cadastrar', component: CreateImovelComponent},
    {path: 'imoveis/atualizar/:id', component: UpdateImovelComponent},
    {path: 'imoveis/deletar/:id', component: DeleteImovelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
