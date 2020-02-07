import { Component, OnInit } from '@angular/core';
import { ImovelService } from '../imovel.service';
import { UpdateImovel } from '../imovel.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-imovel',
  templateUrl: './update-imovel.component.html',
  styleUrls: ['./update-imovel.component.css']
})
export class UpdateImovelComponent implements OnInit {
  
  id: string;
  request: UpdateImovel;

  constructor(private imovelService: ImovelService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.imovelService.getImovel(this.id).subscribe(res => { 
      this.request = {
        idProprietario: `${res.idProprietario}`,
        endereco : `${res.endereco}`,
        areaTerreno: `${res.areaTerreno}`,
        areaConstruida: `${res.areaConstruida}`,
        areaTotal: `${res.areaTotal}`,
        aliquota: `${res.aliquota}`,
        venalTerreno: `${res.venalTerreno}`,
        venalConstrucao: `${res.venalConstrucao}`,
        venalTotal: `${res.venalTotal}`,
        aliquotaAplicada: `${res.aliquotaAplicada}`,
        imposto: `${res.imposto}`
      };
    });
  }

  atualizar(){
    this.imovelService.updateImovel(this.id, this.request).subscribe(res => {
      alert(`Proprietario: ${res.idProprietario},
            Endereco: ${res.endereco},
            Area Terreno: ${res.areaTerreno},
            Area Construida: ${res.areaConstruida},
            Area Total: ${res.areaTotal},
            Aliquota: ${res.aliquota},
            Venal Terreno: ${res.venalTerreno},
            Venal Construcao: ${res.venalConstrucao},
            Venal Total: ${res.venalTotal},
            Aliquota Aplicada: ${res.aliquotaAplicada},
            Imposto: ${res.imposto})`);
    });
    this.router.navigate(['/imoveis']);
  }
}
