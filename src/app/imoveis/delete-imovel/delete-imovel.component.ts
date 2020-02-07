import { Component, OnInit } from '@angular/core';
import { Imovel } from '../imovel.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ImovelService } from '../imovel.service';

@Component({
  selector: 'app-delete-imovel',
  templateUrl: './delete-imovel.component.html',
  styleUrls: ['./delete-imovel.component.css']
})
export class DeleteImovelComponent implements OnInit {

  id: string;
  imovel: Imovel;

  constructor(private imovelService: ImovelService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.imovelService.getImovel(this.id).subscribe(res => {
      this.imovel = res;
    });
  }

  delete() {
    this.imovelService.deleteImovel(this.id).subscribe(res => {
      alert('Removido com sucesso!');
      this.router.navigate(['/imoveis']);
    },
    error =>{
      alert('Não é possível remover com associação a imóveis!');
      this.router.navigate(['/imoveis']);
    });
  }
}
