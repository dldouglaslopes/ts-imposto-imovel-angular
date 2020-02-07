import { Component, OnInit } from '@angular/core';
import { Imovel } from './imovel.model';
import { ImovelService } from './imovel.service';

@Component({
  selector: 'app-imoveis',
  templateUrl: './imoveis.component.html',
  styleUrls: ['./imoveis.component.css']
})
export class ImoveisComponent implements OnInit {

  imoveis: Imovel[];

  constructor(private imovelService: ImovelService) { }

  ngOnInit() {
    this.imovelService.getImoveis()
                            .subscribe(res => this.imoveis = res);
  }

}
