import { Component, OnInit } from '@angular/core';
import { ProprietarioService } from './proprietario.service';
import { Proprietario } from './proprietario.model';

@Component({
  selector: 'app-proprietarios',
  templateUrl: './proprietarios.component.html',
  styleUrls: ['./proprietarios.component.css']
})
export class ProprietariosComponent implements OnInit {

  proprietarios: Proprietario[];

  constructor(private proprietarioService: ProprietarioService) { }

  ngOnInit() {
    this.proprietarioService.getProprietarios()
                            .subscribe(res => this.proprietarios = res);
  }


}
