import { Component, OnInit } from '@angular/core';
import { CreateImovel, Imovel } from '../imovel.model';
import { ImovelService } from '../imovel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-imovel',
  templateUrl: './create-imovel.component.html',
  styleUrls: ['./create-imovel.component.css']
})
export class CreateImovelComponent implements OnInit {

  request: CreateImovel = {
    idProprietario: 0,
    endereco: '',
    areaTerreno: 0,
    areaConstruida: 0,
    areaTotal: 0,
    aliquota: 0,
    venalTerreno: 0,
    venalConstrucao: 0,
    venalTotal: 0,
    aliquotaAplicada: 0,
    imposto: 0
  };

  imovel: Imovel;

  constructor(private proprietarioService: ImovelService,
              private router: Router) { }

  ngOnInit() {
  }

  save(){
    this.proprietarioService.createImovel(this.request).subscribe( res => {
      res.areaTotal = res.areaTerreno + res.areaConstruida;
      res.venalTotal = res. venalConstrucao + res.venalTerreno;
      res.imposto = res.venalTotal * res.aliquota;
      this.imovel = res;
      this.router.navigate(['/imoveis']);
    });
  }

}
