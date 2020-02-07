import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProprietarioService } from '../proprietario.service';
import { Proprietario } from '../proprietario.model';

@Component({
  selector: 'app-delete-proprietario',
  templateUrl: './delete-proprietario.component.html',
  styleUrls: ['./delete-proprietario.component.css']
})
export class DeleteProprietarioComponent implements OnInit {

  id: string;
  proprietario: Proprietario;

  constructor(private proprietarioService: ProprietarioService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.proprietarioService.getProprietario(this.id).subscribe(res => {
      this.proprietario = res;
    });
  }

  delete() {
    this.proprietarioService.deleteProprietario(this.id).subscribe(res => {
      this.router.navigate(['/proprietarios']);
      alert('Removido com sucesso!');
    },
    error =>{
      this.router.navigate(['/proprietarios']);
      alert('Não é possível remover com associação a imóveis!');
    });
  }
}
