import { Component, OnInit } from '@angular/core';
import { Proprietario, CreateProprietario } from '../proprietario.model';
import { ProprietarioService } from '../proprietario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-proprietario',
  templateUrl: './create-proprietario.component.html',
  styleUrls: ['./create-proprietario.component.css']
})
export class CreateProprietarioComponent implements OnInit {

  request: CreateProprietario = {
    nome: '',
    endereco: ''
  };

  proprietario: Proprietario;

  constructor(private proprietarioService: ProprietarioService,
              private router: Router) { }

  ngOnInit() {
  }

  save(){
    this.proprietarioService.createProprietario(this.request).subscribe( res => {
      this.proprietario = res;
      this.router.navigate(['/proprietarios']);
    });
    
  }
}
